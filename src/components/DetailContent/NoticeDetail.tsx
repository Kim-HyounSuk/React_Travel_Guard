import { INotice } from '@/types/notices';
import React from 'react';
import { Modal } from '@/components/common';
import styled from '@emotion/styled';

interface IProps {
	notice: INotice;
	onClose: () => void;
}

const NoticeDetail: React.FC<IProps> = ({ notice, onClose }) => {
	return (
		<Modal onClose={onClose}>
			<Title>
				<span>{notice.title}</span>
				<span>{notice.wrt_dt}</span>
			</Title>
			<Container>
				<Content dangerouslySetInnerHTML={{ __html: notice.txt_origin_cn }} />
			</Container>
		</Modal>
	);
};

export default NoticeDetail;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	margin-bottom: 1rem;
	gap: 0.5rem;

	& > span:nth-of-type(1) {
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		font-size: ${({ theme }) => theme.fontSizes.medium};
	}

	& > span:nth-of-type(2) {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		& > span:nth-of-type(1) {
			font-weight: ${({ theme }) => theme.fontWeights.medium};
			font-size: ${({ theme }) => theme.fontSizes.regular};
		}
	}
`;

const Content = styled.div`
	min-height: 0;
	overflow-y: auto;
	overflow-x: hidden;
	min-height: 100%;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: ${({ theme }) => theme.colors.primary};
	}

	& p,
	& span,
	& div {
		font-size: ${({ theme }) => theme.fontSizes.regular} !important;
		color: ${({ theme }) => theme.colors.text} !important;
		text-align: left !important;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		& p span {
			font-size: ${({ theme }) => theme.fontSizes.small} !important;
		}
	}
`;
