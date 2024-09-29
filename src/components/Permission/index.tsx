import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import React from 'react';
import { BadgeText, Box } from '@/components/common';
import { Link } from 'react-router-dom';

interface IProps {
	data: ICombinedData[];
}

const Permission: React.FC<IProps> = ({ data }) => {
	return (
		<Container>
			<Title>
				<span>국가</span>
				<span>입국 기간</span>
				<span>입국 여부</span>
				<span>여권 소지</span>
				<span>무비자 근거</span>
			</Title>
			<Contents>
				{data.length > 0 ? (
					data.map((country) => (
						<Link to={'/'}>
							<Content>
								<BadgeText isTab={true} color={country.color}>
									{country.country_nm}
								</BadgeText>
								<span>{country.entry?.entry_period}</span>
								<span>{country.entry?.entry_status}</span>
								<span>{country.entry?.entry_possession}</span>
								<span>{country.entry?.entry_ground}</span>
							</Content>
						</Link>
					))
				) : (
					<NonContent>조건에 맞는 데이터가 없습니다.</NonContent>
				)}
			</Contents>
		</Container>
	);
};

export default Permission;

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	min-height: 0;
	margin: 3rem 0;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		padding: 0.5rem;
	}
`;
const Title = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	padding: 0 0 1rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

	& > span {
		flex: 1;
		text-align: center;
		color: ${({ theme }) => theme.colors.primary};
	}

	& > span:nth-of-type(1) {
		min-width: 125px;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		font-size: ${({ theme }) => theme.fontSizes.regular};
		& > span:nth-last-of-type(1) {
			display: none;
		}
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		padding: 0 0 0.5rem 0;
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;
const Contents = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	width: 100%;
	gap: 1rem;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #f0f0f0;
	}
`;
const Content = styled.div`
	display: flex;
	align-items: center;

	& > * {
		flex: 1;
		text-align: center;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		font-size: ${({ theme }) => theme.fontSizes.small};

		& > span:nth-last-of-type(1) {
			display: none;
		}
	}
`;
const NonContent = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;
