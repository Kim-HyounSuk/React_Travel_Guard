import styled from '@emotion/styled';
import { Box } from '@/components/common';
import { IEmbassy } from '@/types/embassies';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface IProps {
	content: IEmbassy;
}

const ContentBox: React.FC<IProps> = React.memo(({ content }) => {
	const [isActive, setIsActive] = useState(false);

	const navigate = useNavigate();

	const handleOnCickedBtn = () => {
		navigate(`/detail/${content.country_iso_alp2.toLowerCase()}`);
	};

	return (
		<Container>
			<Title onClick={() => setIsActive((prev) => !prev)}>
				<EmbassyName>{`${content.country_nm} ${content.embassy_ty_cd_nm}`}</EmbassyName>
				{isActive ? (
					<FontAwesomeIcon icon={faAngleUp} />
				) : (
					<FontAwesomeIcon icon={faAngleDown} />
				)}
			</Title>
			{isActive ? (
				<ContentWrap>
					<Content>
						<ItemTitle>주소</ItemTitle>
						<ItemText>{content.emblgbd_addr}</ItemText>
						<ItemTitle>전화번호</ItemTitle>
						<ItemText>{content.tel_no}</ItemText>
						<ItemTitle>긴급번호</ItemTitle>
						<ItemText>{content.urgency_tel_no}</ItemText>
					</Content>
					<DetailBtn onClick={handleOnCickedBtn}>상세 페이지</DetailBtn>
				</ContentWrap>
			) : null}
		</Container>
	);
});

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

const EmbassyName = styled.span`
	color: inherit;
`;

const ContentWrap = styled.div`
	text-align: right;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
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
