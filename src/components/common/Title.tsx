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

	& > h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		padding-bottom: 0.25rem;
	}
`;
