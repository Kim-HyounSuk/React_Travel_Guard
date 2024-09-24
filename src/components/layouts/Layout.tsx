import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<Container>
			<OutletWrapper>
				<Outlet />
			</OutletWrapper>
		</Container>
	);
};

export default Layout;

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-width: ${({ theme }) => theme.layout.minWidth.mobile};
	max-width: ${({ theme }) => theme.layout.maxWidth.desktop};
	min-height: 100%;
	margin: 0 auto;
`;

const OutletWrapper = styled.main`
	width: 100%;
	height: 100%;
	padding: 0 1rem;
	overflow-y: auto;
`;
