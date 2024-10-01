import styled from '@emotion/styled';
import React from 'react';
import Badge from './Badge';

interface IProps {
	children: React.ReactNode;
	isTab: boolean;
	color: string;
}

const BadgeText: React.FC<IProps> = ({ isTab = false, children, color }) => {
	return (
		<Container>
			<Badge color={color} isTab={isTab} />
			<Text>{children}</Text>
		</Container>
	);
};

export default BadgeText;

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	min-width: 125px;
	color: inherit;
`;

const Text = styled.span`
	color: inherit;
`;
