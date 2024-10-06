import styled from '@emotion/styled';
import { Box } from '@/components/common';
import { INotice } from '@/types/notices';
import React, { useState } from 'react';
import NoticeDetail from './NoticeDetail';

interface IProps {
	notices: INotice[];
}

const Notice: React.FC<IProps> = React.memo(({ notices }) => {
	const [isModal, setIsModal] = useState<INotice | null>(null);

	return (
		<Container>
			{isModal && (
				<NoticeDetail notice={isModal} onClose={() => setIsModal(null)} />
			)}
			<Title>안전공지</Title>
			{notices && notices.length > 0 ? (
				<Contents>
					{notices.map((notice, idx) => (
						<Item onClick={() => setIsModal(notice)} key={idx}>
							<span>{notice.title}</span>
							<span>{notice.wrt_dt}</span>
						</Item>
					))}
				</Contents>
			) : (
				<NonItem>해당 국가의 안전공지 정보가 없습니다.</NonItem>
			)}
		</Container>
	);
});

export default Notice;

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	grid-column: 8 / 16;
	grid-row: 1 /2;
`;

const Title = styled.div`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	padding-bottom: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
	font-size: ${({ theme }) => theme.fontSizes.small};
	cursor: pointer;

	& > span {
		color: inherit;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const NonItem = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;
