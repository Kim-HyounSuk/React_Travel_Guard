import styled from '@emotion/styled';
import React, { FC } from 'react';

interface IProps {
	children: React.ReactNode;
}

const Box: FC<IProps> = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Box;

const Container = styled.div`
	display: flex;
	width: 100%;
	background: ${({ theme }) => theme.gradients.boxGradient};
	border: 2px solid;
	border-image: ${({ theme }) => theme.gradients.strokeGradient} 1;
	border-radius: 0.5rem;
	padding: 1rem;
	align-items: center;
	justify-content: center;
`;
