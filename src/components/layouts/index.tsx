import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<Container>
			<Header />
			<OutletWrapper>
				<Outlet />
			</OutletWrapper>
			<Footer />
		</Container>
	);
};

export default Layout;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-width: ${({ theme }) => theme.layout.minWidth.mobile};
	max-width: ${({ theme }) => theme.layout.maxWidth.desktop};
	min-height: 100%;
	margin: 0 auto;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet};
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet};
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet};
	}
`;

const OutletWrapper = styled.main`
	flex: 1;
	width: 100%;
	padding: 0 1rem;
	overflow: hidden;
	max-width: 1200px;
`;
