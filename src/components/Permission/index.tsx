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
`;

const NonContent = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;
