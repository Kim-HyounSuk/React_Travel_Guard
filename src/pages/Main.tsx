import useTravelAlert from '@/api/trevelAlert';
import styled from '@emotion/styled';

const Main = () => {
	const { data } = useTravelAlert();

	return <Container>Main 영역</Container>;
};

export default Main;

const Container = styled.section`
	background: ${({ theme }) => theme.gradients.boxGradient};
	border: 2px solid;
	border-image: ${({ theme }) => theme.gradients.strokeGradient} 1;
	width: 400px;
	height: 400px;
`;
