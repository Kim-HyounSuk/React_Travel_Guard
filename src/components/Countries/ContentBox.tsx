import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import { BadgeText, Box } from '@/components/common';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
	data: ICombinedData[];
}

const ContentBox: React.FC<IProps> = React.memo(({ data }) => {
	return (
		<Container>
			{data.length > 0 ? (
				<Contents>
					{data.map((country, idx) => (
						<Link
							key={idx}
							to={`/detail/${country.country_iso_alp2.toLowerCase()}`}
						>
							<BadgeText isTab={false} color={country.color}>
								{country.country_nm}
							</BadgeText>
						</Link>
					))}
				</Contents>
			) : (
				<NonContents>조건에 맞는 데이터가 없습니다.</NonContents>
			)}
		</Container>
	);
});

export default ContentBox;

const Container = styled(Box)`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	font-size: ${({ theme }) => theme.fontSizes.regular};
	padding: 1rem;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: ${({ theme }) => theme.colors.primary};
	}
`;

const Contents = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	gap: 1rem;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeMobile}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const NonContents = styled.div`
	flex: 1;
	width: 100%;
	min-height: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
