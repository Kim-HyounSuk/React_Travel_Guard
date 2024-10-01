import { travelAlertInfo } from '@/constants';
import { ICountryInfo, IGeoJson, IGeoJsonFeature } from '@/types/globe';
import useCombinedData from '@/utils/useCombinedData';
import styled from '@emotion/styled';
import {
	MouseEvent,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import PolygonInfo from './PolygonInfo';
import { useNavigate } from 'react-router-dom';
import TravelAlertList from './TravelAlertList';

const Earth = () => {
	const navigate = useNavigate();
	const { data } = useCombinedData();
	const [geoJson, setGeoJson] = useState<IGeoJson | null>(null);
	const [hoverPolygon, setHoverPolygon] = useState<IGeoJsonFeature | null>(
		null,
	);
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const [countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const containerRef = useRef<HTMLDivElement | null>(null);
	const globeRef = useRef<GlobeMethods | undefined>(undefined);

	// Polygon Color 함수
	const polygonColorWrapper = useCallback(
		(polygon: IGeoJsonFeature | null) => {
			if (!polygon) return travelAlertInfo[5].color;

			const country = data?.find(
				(country) =>
					country.country_iso_alp2 === polygon?.properties.ISO_A2 ||
					country.country_eng_nm === polygon.properties.ADMIN,
			);

			return country ? country.color : travelAlertInfo[5].color;
		},
		[data],
	);

	// Polygon Hover 이벤트 핸들러
	const handlePolygonHover = useCallback(
		(polygon: IGeoJsonFeature | null) => {
			setHoverPolygon(polygon);

			if (containerRef.current) {
				containerRef.current.style.cursor = polygon ? 'pointer' : 'default';
			}
		},
		[containerRef],
	);

	// Polygon Click 이벤트 핸들러
	const handlePolygonClicked = useCallback(() => {
		if (!countryInfo) return;
		if (countryInfo.alam_lvl === 5) return;

		navigate(`/detail/${countryInfo.id.toLowerCase()}`);
	}, [countryInfo, navigate]);

	// Polygon과 일치하는 Country의 정보 생성 함수
	const createCountryInfo = useCallback(
		(polygon: IGeoJsonFeature | null) => {
			if (!polygon) {
				setCountryInfo(null);
				return;
			}

			const country = data?.find(
				(country) =>
					country.country_iso_alp2 === polygon.properties.ISO_A2 ||
					country.country_eng_nm === polygon.properties.ADMIN,
			);

			if (!country) {
				setCountryInfo({
					id: polygon.properties.ISO_A2,
					name: polygon?.properties.ADMIN,
					continent: polygon?.properties.CONTINENT,
					region_ty: '전체',
					title: '여행불가',
					alam_lvl: 5,
				});
			} else {
				setCountryInfo({
					name: country.country_nm,
					id: country.country_iso_alp2,
					continent: country.continent_nm,
					region_ty: country.region_ty,
					alam_lvl: country.alarm_lvl,
					title: travelAlertInfo[country.alarm_lvl || 0].title,
				});
			}
		},
		[data],
	);

	// 마우스 Move 이벤트 핸들러
	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			if (!containerRef.current) return;
			if (!countryInfo || !hoverPolygon) return;
			if (countryInfo.id === hoverPolygon.properties.ISO_A2) {
				const rect = containerRef.current.getBoundingClientRect();
				const relativeX = e.clientX - rect.left;
				const relativeY = e.clientY - rect.top;

				if (relativeX >= 0 && relativeY >= 0) {
					setMousePosition({ x: relativeX, y: relativeY });
				}
			}
		},
		[countryInfo, hoverPolygon],
	);

	// 반응형 ZoomLevel
	const updateZoomLevel = () => {
		if (!containerRef.current) return;
		const newWidth = containerRef.current.offsetWidth;
		const newHeight = containerRef.current.offsetHeight;

		setWidth(newWidth);
		setHeight(newHeight);

		if (globeRef.current) {
			let zoomDistance;

			if (newWidth <= 480) {
				// mobile
				zoomDistance = 800;
			} else if (newWidth <= 768) {
				// tablet
				zoomDistance = 600;
			} else if (newWidth <= 1024) {
				// largeTablet
				zoomDistance = 400;
			} else {
				// desktop
				zoomDistance = 300;
			}

			// Globe의 카메라 Z축(줌) 설정
			globeRef.current.camera().position.z = zoomDistance;
		}
	};

	// GeoJSON 데이터 fetch
	useEffect(() => {
		fetch('datasets/contries.geojson')
			.then((res) => res.json())
			.then(setGeoJson);
	}, []);

	useLayoutEffect(() => {
		updateZoomLevel();

		window.addEventListener('resize', updateZoomLevel);
		return () => {
			window.removeEventListener('resize', updateZoomLevel);
		};
	}, [width, height]);

	return (
		<Container ref={containerRef} onMouseMove={(e) => handleMouseMove(e)}>
			{hoverPolygon && (
				<PolygonInfo
					countryInfo={countryInfo}
					style={{
						left: mousePosition.x,
						top: mousePosition.y,
					}}
				/>
			)}
			<Globe
				ref={globeRef}
				globeImageUrl={
					'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
				}
				backgroundImageUrl={'//unpkg.com/three-globe/example/img/night-sky.png'}
				backgroundColor={'rgba(0, 0, 0, 0)'}
				lineHoverPrecision={0}
				polygonsData={geoJson?.features.filter(
					(country) =>
						country.properties.ISO_A2 !== 'AQ' &&
						country.properties.ISO_A2 !== 'KR',
				)}
				polygonAltitude={(country) => (country === hoverPolygon ? 0.12 : 0.06)}
				polygonCapColor={(polygon) =>
					polygonColorWrapper(polygon as IGeoJsonFeature | null)
				}
				polygonSideColor={(polygon) =>
					polygonColorWrapper(polygon as IGeoJsonFeature | null)
				}
				polygonStrokeColor={() => '#111'}
				onPolygonHover={(polygon) => {
					handlePolygonHover(polygon as IGeoJsonFeature | null);
					createCountryInfo(polygon as IGeoJsonFeature | null);
				}}
				polygonsTransitionDuration={100}
				width={width}
				height={height}
				atmosphereColor={'rgba(255, 255, 255, 1)'}
				atmosphereAltitude={0.2}
				onPolygonClick={() => handlePolygonClicked()}
			/>
			<TravelAlertList />
		</Container>
	);
};

export default Earth;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;
