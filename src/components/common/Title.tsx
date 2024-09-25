import styled from '@emotion/styled';
import { FC } from 'react';

interface IProps {
	data: {
		title: string;
		description: string;
	};
}

const Title: FC<IProps> = ({ data: { title, description } }) => {
	return (
		<Container>
			<h2>{title}</h2>
			<span>{description}</span>
		</Container>
	);
};

export default Title;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	& > h2 {
		font-size: 1.25rem;
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		padding: 0 0.25rem;
	}
`;
