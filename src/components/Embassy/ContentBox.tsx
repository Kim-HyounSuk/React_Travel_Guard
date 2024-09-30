import styled from '@emotion/styled';
import { Box } from '@/components/common';
import { IEmbassy } from '@/types/embassies';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface IProps {
	content: IEmbassy;
}

const ContentBox: React.FC<IProps> = ({ content }) => {
	const [isActive, setIsActive] = useState(false);
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
				<Content>
					<ItemTitle>주소</ItemTitle>
					<ItemText>{content.emblgbd_addr}</ItemText>
					<ItemTitle>전화번호</ItemTitle>
					<ItemText>{content.tel_no}</ItemText>
					<ItemTitle>긴급번호</ItemTitle>
					<ItemText>{content.urgency_tel_no}</ItemText>
				</Content>
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

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;

const EmbassyName = styled.span`
	color: inherit;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	padding-top: 1rem;
	grid-row-gap: 0.5rem;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;

const ItemTitle = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ItemText = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.light};
	font-size: ${({ theme }) => theme.fontSizes.small};
`;
