import styled from '@emotion/styled';
import { Badge, Box } from '@/components/common';
import { travelAlertInfo } from '@/constants';
import React from 'react';

const TravelAlertList: React.FC = () => {
	return (
		<Container>
			{Object.values(travelAlertInfo).map((value, idx) => {
				return (
					<Content key={idx}>
						<BadgeContent>
							<Badge color={value.color} isTab={true} />
							<span>
								{idx}단계 {value.title}
							</span>
						</BadgeContent>
						<Description>
							{value.text.map((text, idx) => (
								<span key={idx}>{text}</span>
							))}
						</Description>
					</Content>
				);
			})}
		</Container>
	);
};

export default TravelAlertList;

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1.25rem 1.5rem;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const BadgeContent = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;

	& > span {
		font-weight: ${({ theme }) => theme.fontWeights.light};
	}
`;
