import styled from '@emotion/styled';
import { Box } from '@/components/common';
import ICombinedData from '@/types/combinedData';
import React from 'react';

interface IProps {
	country: ICombinedData;
}

const PermissionContent: React.FC<IProps> = ({ country }) => {
	return country.entry ? (
		<Container>
			<ItemRow>
				<Label>입국 기간</Label>
				<Text>{country.entry.entry_period}</Text>
			</ItemRow>
			<ItemRow>
				<Label>입국 가능</Label>
				<Text>{country.entry.entry_status}</Text>
			</ItemRow>
			<ItemRow>
				<Label>여권 소지</Label>
				<Text>{country.entry.entry_possession}</Text>
			</ItemRow>
			<ItemRow>
				<Label>무비자 근거</Label>
				<Text>{country.entry.entry_ground}</Text>
			</ItemRow>
		</Container>
	) : (
		<Container>
			<NonItem>해당 국가의 입국 허가 요건 정보가 없습니다.</NonItem>
		</Container>
	);
};

export default PermissionContent;

const Container = styled(Box)`
	grid-column: 8/16;
	grid-row: 2/ 3;
	display: flex;
	flex-direction: column;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-around;
`;

const ItemRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Label = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

const Text = styled.span`
	text-align: right;
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const NonItem = styled.div`
	grid-column: 1/ 3;
	text-align: center;
`;
