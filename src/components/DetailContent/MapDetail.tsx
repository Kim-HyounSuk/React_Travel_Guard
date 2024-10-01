import { Modal } from '@/components/common';
import styled from '@emotion/styled';
import React from 'react';

interface IProps {
	imgURL: string;
	onClose: () => void;
}

const MapDetail: React.FC<IProps> = ({ imgURL, onClose }) => {
	return (
		<Modal onClose={onClose}>
			<Image src={imgURL} alt={'map'} />
		</Modal>
	);
};

export default MapDetail;

const Image = styled.img`
	padding-top: 2rem;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
