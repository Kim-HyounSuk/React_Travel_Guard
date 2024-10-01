import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Box } from '@/components/common';
import MapDetail from './MapDetail';

interface IProps {
	country: ICombinedData;
}

const Map: React.FC<IProps> = ({ country }) => {
	const [isModal, setIsModal] = useState<string | null>(null);

	return (
		<Container onClick={() => setIsModal(country.dang_map_download_url)}>
			{isModal && (
				<MapDetail onClose={() => setIsModal(null)} imgURL={isModal} />
			)}
			<Image
				src={country.dang_map_download_url}
				alt={`${country.country_nm}_map`}
			/>
		</Container>
	);
};

export default Map;

const Container = styled(Box)`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column: 1 /8;
	grid-row: 1 / 3;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	cursor: pointer;
`;
