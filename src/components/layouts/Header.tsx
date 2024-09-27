/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import shouldForwardProp from '@emotion/is-prop-valid';
import { keyframes } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Container>
			<Logo to={'/'}>
				<img src={'/image/logo.png'} alt="logo" />
			</Logo>
			<NavMenu isVisible={menuOpen}>
				<NavItem
					onClick={() => setMenuOpen((prev) => !prev)}
					to={'/main'}
					isActive={location.pathname.startsWith('/main')}
				>
					국가별 정보
				</NavItem>
				<NavItem
					onClick={() => setMenuOpen((prev) => !prev)}
					to={'/permission'}
					isActive={location.pathname.startsWith('/permission')}
				>
					입국 허가요건 정보
				</NavItem>
				<NavItem
					onClick={() => setMenuOpen((prev) => !prev)}
					to={'/embassy'}
					isActive={location.pathname.startsWith('/embassy')}
				>
					국가별 대사관 정보
				</NavItem>
			</NavMenu>
			<HambergerMenu onClick={() => setMenuOpen((prev) => !prev)}>
				{menuOpen ? (
					<FontAwesomeIcon icon={faXmark} />
				) : (
					<FontAwesomeIcon icon={faBars} />
				)}
			</HambergerMenu>
		</Container>
	);
};

export default Header;

const sparkle = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.header`
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background};
	align-items: center;
	padding: 2rem 1rem;
	position: relative;
	z-index: 2;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

const Logo = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 2rem;
	transition: opacity 1s ease;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		max-width: 310px;

		@media (max-width: 768px) {
			max-width: 172px;
		}
	}

	&:hover > img {
		animation: ${sparkle} 1s ease-out;
	}
`;

const NavMenu = styled.nav<{ isVisible: boolean }>`
	display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
	width: 100%;
	gap: 0.75rem;
	position: absolute;
	left: 0;
	top: 100%;
	width: 100%;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.background};
	padding: 0 1rem 1rem 1rem;

	@media (min-width: 769px) {
		display: flex;
		flex-direction: row;
		position: static;
		max-width: 708px;
		padding: 0;
	}
`;

const NavItem = styled(Link, {
	shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== 'isActive',
})<{ isActive: boolean }>`
	padding: 0.75rem 0;
	flex: 1;
	text-align: center;

	&:hover {
		font-weight: ${({ theme }) => theme.fontWeights.extraBold};
		border-bottom: 1px solid;
		border-image: radial-gradient(
				circle,
				rgba(127, 169, 255, 1) 0%,
				rgba(0, 0, 0, 1) 100%
			)
			1;
	}

	${({ isActive, theme }) =>
		isActive &&
		`
		font-weight: ${theme.fontWeights.extraBold};
		border-bottom: 1px solid;
		border-image: radial-gradient(circle, rgba(127, 169, 255, 1) 0%, rgba(0, 0, 0, 1) 100%) 1;
		`}
`;

const HambergerMenu = styled.div`
	display: none;
	cursor: pointer;
	font-size: 1.5rem;
	padding: 0.75rem 0;

	&:hover > svg > path {
		color: ${({ theme }) => theme.colors.primary};
	}

	@media (max-width: 768px) {
		display: block;
		position: absolute;
		right: 1rem;
	}
`;
