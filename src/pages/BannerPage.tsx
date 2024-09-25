import useTravelAlert from '@/api/trevelAlert';
import styled from '@emotion/styled';

const BannerPage = () => {
	const { data } = useTravelAlert();
	console.log(data);
	return <Container>베너</Container>;
};

export default BannerPage;

const Container = styled.section`
	background: ${({ theme }) => theme.gradients.boxGradient};
	border: 2px solid;
	border-image: ${({ theme }) => theme.gradients.strokeGradient} 1;
	width: 400px;
	height: 400px;
`;
