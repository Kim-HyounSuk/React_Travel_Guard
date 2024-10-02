import { Box } from '@/components/common';
import styled from '@emotion/styled';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IProps {
	children: React.ReactNode;
	onClose: () => void;
}

const Modal: React.FC<IProps> = ({ children, onClose }) => {
	const handleClickedContainer = (e: React.MouseEvent) => {
		e.stopPropagation();

		onClose();
	};

	return (
		<Container onClick={handleClickedContainer}>
			<Content onClick={(e) => e.stopPropagation()}>
				{children}
				<StyledFontAwesomeIcon onClick={onClose} icon={faXmark} />
			</Content>
		</Container>
	);
};

export default Modal;

const Container = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	left: 0;
	top: 0;
	z-index: 3;
	background-color: rgba(0, 0, 0, 0.5);
	cursor: pointer;
`;

const Content = styled(Box)`
	position: relative;
	max-width: ${({ theme }) => theme.layout.maxWidth.tablet};
	width: calc(100% - 2rem);
	aspect-ratio: 1 / 1;
	cursor: default;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	&:hover path {
		color: ${({ theme }) => theme.colors.primary};
	}
	cursor: pointer;
`;
