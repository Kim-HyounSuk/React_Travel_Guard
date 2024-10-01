import styled from '@emotion/styled';
import { Box } from '../common';
import BadgeText from '../common/BadgeText';
import React from 'react';
import { travelAlertInfo } from '@/constants';
import { ICountryInfo } from '@/types/globe';

interface IProps {
	countryInfo: ICountryInfo | null;
	style: React.CSSProperties;
}

const PolygonInfo: React.FC<IProps> = ({ countryInfo, style }) => {
	return (
		<Container style={style}>
			<CountryTitle>
				<span>{countryInfo?.name}</span>
				<span>{countryInfo?.continent}</span>
				<div>
					<BadgeText
						isTab={true}
						color={travelAlertInfo[countryInfo?.alam_lvl as number].color}
					>
						{`${countryInfo?.alam_lvl}단계 ${countryInfo?.title}`}
					</BadgeText>
				</div>
				<div>
					<span>범위: </span>
					<span>{countryInfo?.region_ty}</span>
				</div>
			</CountryTitle>
		</Container>
	);
};

export default PolygonInfo;

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	position: absolute;
	width: auto;
	gap: 1rem;
	transform: translate(-50%, 50%);
	width: 250px;
	z-index: 1;
`;

const CountryTitle = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 0.25rem;

	& > span:nth-of-type(1) {
		font-weight: ${({ theme }) => theme.fontWeights.bold};
	}

	& > span:nth-of-type(2) {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}

	& > div:nth-of-type(1) {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
	}
`;
