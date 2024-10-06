import styled from '@emotion/styled';
import { Box } from '@/components/common';
import { IEmbassy } from '@/types/embassies';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

interface IProps {
	embassies: IEmbassy[];
}

const EmbassiesContent: React.FC<IProps> = React.memo(({ embassies }) => {
	const [isActive, setIsActive] = useState(true);

	return (
		<Container>
			<Title onClick={() => setIsActive((prev) => !prev)}>
				<span>재외공관 정보({embassies.length})</span>
				{isActive ? (
					<FontAwesomeIcon icon={faAngleUp} />
				) : (
					<FontAwesomeIcon icon={faAngleDown} />
				)}
			</Title>
			{isActive ? (
				<ContentBox>
					{embassies.length > 0 ? (
						embassies.map((embassy, idx) => (
							<Content key={idx}>
								<ContentLabel>재외공관 이름</ContentLabel>
								<ContentItem>{embassy.embassy_kor_nm}</ContentItem>
								<ContentLabel>주소</ContentLabel>
								<ContentItem>{embassy.emblgbd_addr}</ContentItem>
								<ContentLabel>전화번호</ContentLabel>
								<ContentItem>{embassy.tel_no}</ContentItem>
								<ContentLabel>긴급번호</ContentLabel>
								<ContentItem>{embassy.urgency_tel_no}</ContentItem>
							</Content>
						))
					) : (
						<NonItem>해당 국가의 재외공관 정보가 없습니다.</NonItem>
					)}
				</ContentBox>
			) : null}
		</Container>
	);
});

export default EmbassiesContent;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Title = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	font-weight: ${({ theme }) => theme.fontWeights.bold};

	&:hover > span,
	&:hover > svg > path {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Content = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.5rem;
`;

const ContentLabel = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ContentItem = styled.span`
	text-align: right;
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const NonItem = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
