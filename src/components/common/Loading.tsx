import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PacmanLoader } from 'react-spinners';

const Loading = () => {
	const theme = useTheme();

	return (
		<Container>
			<PacmanLoader color={theme.colors.text} />
			<Text>잠시만 기다려주세요</Text>
		</Container>
	);
};

export default Loading;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	z-index: 3;
	width: 100%;
	height: 100%;
	gap: 1rem;
`;

const Text = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.medium};
`;
