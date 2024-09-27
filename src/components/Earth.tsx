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
import Globe from 'react-globe.gl';
import TravelAlertList from './TravelAlertList';
import PolygonInfo from './PolygonInfo';

const Earth = () => {
	const { data } = useCombinedData();
	const [geoJson, setGeoJson] = useState<IGeoJson | null>(null);
	const [hoverPolygon, setHoverPolygon] = useState<IGeoJsonFeature | null>(
		null,
	);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isTablet, setIsTablet] = useState(false);

	const globeRef = useRef<HTMLDivElement | null>(null);

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

			if (globeRef.current) {
				globeRef.current.style.cursor = polygon ? 'pointer' : 'default';
			}
		},
		[globeRef],
	);

	// Polygon과 일치하는 Country의 정보 생성 함수
	const createCountryInfo = useCallback(
		(polygon: IGeoJsonFeature | null) => {
			if (!polygon) return;

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
			if (!countryInfo || !hoverPolygon) return;
			if (countryInfo.id === hoverPolygon.properties.ISO_A2) {
				setMousePosition({ x: e.clientX, y: e.clientY });
			}
		},
		[countryInfo, hoverPolygon],
	);

	// GeoJSON 데이터 fetch
	useEffect(() => {
		fetch('datasets/contries.geojson')
			.then((res) => res.json())
			.then(setGeoJson);
	}, []);

	// 반응형 디자인 적용
	useLayoutEffect(() => {
		const handleResize = () => {
			// Globe 사이즈 변경
			if (globeRef.current) {
				const { offsetWidth, offsetHeight } = globeRef.current;
				setWidth(offsetWidth);
				setHeight(offsetHeight);

				if (height >= offsetWidth) {
					setWidth(offsetWidth);
					setHeight(offsetWidth);
				}
			}

			// 태블릿 사이즈 판별
			setIsTablet(window.innerWidth <= 768);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [height]);

	return (
		<Container
			ref={globeRef}
			onMouseMove={isTablet ? undefined : (e) => handleMouseMove(e)}
		>
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
				globeImageUrl={
					'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
				}
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
				atmosphereAltitude={0.1}
			/>
			<AlertListAticle>
				<TravelAlertList />
			</AlertListAticle>
		</Container>
	);
};

export default Earth;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
`;

const AlertListAticle = styled.article`
	position: absolute;
	bottom: 1rem;
	left: 0;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		width: 100%;
		bottom: 0;
		left: unset;
	}
`;
