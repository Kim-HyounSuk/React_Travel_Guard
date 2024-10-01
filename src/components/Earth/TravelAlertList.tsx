import styled from '@emotion/styled';
import { BadgeText, Box } from '@/components/common';
import { travelAlertInfo } from '@/constants';
import React from 'react';

const TravelAlertList: React.FC = () => {
	return (
		<Container>
			{Object.values(travelAlertInfo).map((value, idx) => {
				return (
					<React.Fragment key={idx}>
						<BadgeText
							key={idx}
							isTab={true}
							color={value.color}
						>{`${idx}단계 ${value.title}`}</BadgeText>
						<Description>
							{value.text.map((text, idx) => (
								<span key={idx}>{text}</span>
							))}
						</Description>
					</React.Fragment>
				);
			})}
		</Container>
	);
};

export default TravelAlertList;

const Container = styled(Box)`
	left: 1rem;
	bottom: 1rem;
	width: auto;
	position: absolute;
	display: grid;
	grid-template-columns: 0.5fr 1fr;
	gap: 0.5rem;
	align-items: start;
	font-size: ${({ theme }) => theme.fontSizes.small};
	justify-content: center;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		display: flex;
		width: 100%;
		left: 0;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		justify-content: center;

		& > div {
			justify-content: center;
		}
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;

		& > div {
			justify-content: center;
		}
	}
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		display: none;
	}
`;
