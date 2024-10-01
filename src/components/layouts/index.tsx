import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	const location = useLocation();

	return (
		<Container>
			<Header />
			<OutletWrapper isHome={location.pathname === '/'}>
				<Outlet />
			</OutletWrapper>
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
	min-height: 0;
	margin: 0 auto;
	align-items: center;
`;

const OutletWrapper = styled.main<{ isHome: boolean }>`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	padding: ${({ isHome }) => (isHome ? '0' : '0 1rem')};
	max-width: ${({ isHome, theme }) =>
		isHome ? theme.layout.maxWidth.desktop : theme.layout.maxWidth.largeTablet};
	min-height: 0;
`;
