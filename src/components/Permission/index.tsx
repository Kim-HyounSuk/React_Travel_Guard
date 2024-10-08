import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@/components/common';
import ContentBox from './ContentBox';

interface IProps {
	data: ICombinedData[];
}

const Permission: React.FC<IProps> = ({ data }) => {
	return (
		<Container>
			{data.length > 0 ? (
				data.map((country, idx) => <ContentBox key={idx} content={country} />)
			) : (
				<NonContent>조건에 맞는 데이터가 없습니다.</NonContent>
			)}
		</Container>
	);
};

export default Permission;

const Container = styled(Box)`
	margin: 3rem 0;
	padding: 0 1rem;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: ${({ theme }) => theme.colors.primary};
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		margin: 2.5rem 0;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		margin: 2rem 0;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeMobile}) {
		margin: 1.5rem 0;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		margin: 1rem 0;
	}
`;

const NonContent = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;
