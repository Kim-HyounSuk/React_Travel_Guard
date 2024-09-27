import Earth from '@/components/Earth';
import styled from '@emotion/styled';

const BannerPage = () => {
	return (
		<Container>
			<Earth />
		</Container>
	);
};

export default BannerPage;

const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	position: relative;
`;
