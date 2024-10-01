import styled from '@emotion/styled';
import { BadgeText, Box } from '@/components/common';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import ICombinedData from '@/types/combinedData';
import { useNavigate } from 'react-router-dom';

interface IProps {
	content: ICombinedData;
}

const ContentBox: React.FC<IProps> = ({ content }) => {
	const [isActive, setIsActive] = useState(false);
	const navigate = useNavigate();

	const handleOnCickedBtn = () => {
		navigate(`/detail/${content.country_iso_alp2.toLowerCase()}`);
	};

	return (
		<Container>
			<Title onClick={() => setIsActive((prev) => !prev)}>
				<CountryName>
					<BadgeText isTab={false} color={content.color}>
						{content.country_nm}
					</BadgeText>
				</CountryName>
				{isActive ? (
					<FontAwesomeIcon icon={faAngleUp} />
				) : (
					<FontAwesomeIcon icon={faAngleDown} />
				)}
			</Title>
			{isActive ? (
				<ContentWrap>
					<Content>
						<ItemTitle>입국 가능 기간</ItemTitle>
						<ItemText>{content.entry?.entry_period}</ItemText>
						<ItemTitle>입국 가능 여부</ItemTitle>
						<ItemText>{content.entry?.entry_status}</ItemText>
						<ItemTitle>입국시 여권 소지 여부</ItemTitle>
						<ItemText>{content.entry?.entry_possession}</ItemText>
						<ItemTitle>무비자 입국 근거</ItemTitle>
						<ItemText>{content.entry?.entry_ground}</ItemText>
					</Content>
					<DetailBtn onClick={handleOnCickedBtn}>상세 페이지</DetailBtn>
				</ContentWrap>
			) : null}
		</Container>
	);
};

export default ContentBox;

const Container = styled(Box)`
	margin: 1rem 0;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	cursor: pointer;
	font-weight: ${({ theme }) => theme.fontWeights.bold};

	&:hover,
	&:hover svg path {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const CountryName = styled.span`
	color: inherit;
`;

const ContentWrap = styled.div`
	text-align: right;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	padding: 1rem 0;
	grid-row-gap: 0.5rem;
	text-align: left;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;

const ItemTitle = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ItemText = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.light};
	text-align: right;
`;

const DetailBtn = styled(Box)`
	display: inline-block;
	width: auto;
	padding: 0.5rem;
	cursor: pointer;
	opacity: 0.5;
	font-size: ${({ theme }) => theme.fontSizes.small};

	&:hover {
		opacity: 1;
	}
`;
