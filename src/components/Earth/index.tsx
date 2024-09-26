import { travelAlertColors } from '@/constants';
import { IGeoJson, IGeoJsonFeature } from '@/types/globe';
import useCombinedData from '@/utils/useCombinedData';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const Earth = () => {
	const { data, isLoading, isError, errorMessage } = useCombinedData();
	const [geoJson, setGeoJson] = useState<IGeoJson>();
	const [hoverCountry, setHoverCountry] = useState<IGeoJsonFeature | null>(
		null,
	);

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const globeRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		fetch('datasets/contries.geojson')
			.then((res) => res.json())
			.then(setGeoJson);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (globeRef.current) {
				const { offsetWidth } = globeRef.current;

				setWidth(offsetWidth);
				setHeight(offsetWidth);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Container ref={globeRef}>
			<Globe
				globeImageUrl={
					'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
				}
				// backgroundImageUrl={'//unpkg.com/three-globe/example/img/night-sky.png'}
				backgroundColor={'rgba(0, 0, 0, 0)'}
				lineHoverPrecision={0}
				polygonsData={geoJson?.features.filter(
					(country) => country.properties.ISO_A2 !== 'AQ',
				)}
				polygonAltitude={(country) => (country === hoverCountry ? 0.12 : 0.01)}
				polygonCapColor={(country) => {
					const feature = country as IGeoJsonFeature;
					const isoCode = feature.properties.ISO_A2;
					const nation = data?.find(
						(country) => country.country_iso_alp2 === isoCode,
					);

					return travelAlertColors[nation?.alarm_lvl ? nation.alarm_lvl : 0];
				}}
				polygonSideColor={() => 'rgba(116, 52, 236, 0.15)'}
				polygonStrokeColor={() => '#111'}
				polygonLabel={(country) => {
					const feature = country as IGeoJsonFeature;
					const d = feature.properties;
					const isoCode = feature.properties.ISO_A2;
					const nation = data?.find(
						(country) => country.country_iso_alp2 === isoCode,
					);

					if (nation) {
						return `
					<div style="background-color: inherit; padding: 1rem; border-radius: 5px; color: black; transform: translate(10rem, -100%)">
						<p>${nation.country_nm}(${nation.country_eng_nm})</p>
						<p>${nation.alarm_lvl ? nation.alarm_lvl : '0단계: 경보없음'}</p>
					</div>
				`;
					} else {
						return `
						<div style="background-color: inherit; padding: 1rem; border-radius: 5px; color: black; transform: translate(10rem, -100%)">
							<p>${d.ADMIN}</p>
							<p>0단계: 경보없음</p>
						</div>
					`;
					}
				}}
				onPolygonHover={(polygon) =>
					setHoverCountry(polygon as IGeoJsonFeature | null)
				}
				polygonsTransitionDuration={300}
				width={width}
				height={height}
			/>
		</Container>
	);
};

export default Earth;

const Container = styled.div`
	width: 100%;
	overflow: hidden;
`;
