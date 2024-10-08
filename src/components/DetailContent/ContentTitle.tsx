import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@/components/common';

interface IProps {
	country: ICombinedData;
}

const Title: React.FC<IProps> = React.memo(({ country }) => {
	return (
		<Container>
			<Image>
				<img
					src={country.flag_download_url}
					alt={`flag_${country.country_nm}`}
				/>
			</Image>
			<ContentTitle>
				<h2>{`${country.country_nm}(${country.country_eng_nm})`}</h2>
				<span>{country.continent_nm}</span>
			</ContentTitle>
		</Container>
	);
});

export default Title;

const Container = styled(Box)`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const ContentTitle = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	& > h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: ${({ theme }) => theme.fontWeights.bold};
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		& > h2 {
			font-size: ${({ theme }) => theme.fontSizes.regular};
		}

		& > span {
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
`;

const Image = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		width: 100px;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		width: 50px;
	}
`;
