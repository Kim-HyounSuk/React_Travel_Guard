import styled from '@emotion/styled';
import { FC } from 'react';

interface IProps {
	data: {
		title: string;
		text: string;
	};
}

const Title: FC<IProps> = ({ data: { title, text } }) => {
	return (
		<Container>
			<h2>{title}</h2>
			<span>{text}</span>
		</Container>
	);
};

export default Title;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 3.75rem 0 3rem 0;
	font-size: ${({ theme }) => theme.fontSizes.medium};

	& > h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		padding-bottom: 0.25rem;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		padding: 1.875rem 0 1.5rem 0;
		font-size: ${({ theme }) => theme.fontSizes.regular};

		& > h2 {
			font-size: ${({ theme }) => theme.fontSizes.medium};
		}
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		padding: 1rem 0;
		font-size: ${({ theme }) => theme.fontSizes.small};

		& > h2 {
			font-size: ${({ theme }) => theme.fontSizes.regular};
		}
	}
`;
