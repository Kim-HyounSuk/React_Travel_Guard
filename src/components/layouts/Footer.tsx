import styled from '@emotion/styled';

const Footer = () => {
	return (
		<Container>
			Copyright (c) 2024 [FE1]_9조_김현석. All rights reserved.
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	font-size: ${({ theme }) => theme.fontSizes.small};
	padding: 0.5rem 0;
	min-width: ${({ theme }) => theme.layout.minWidth.mobile};
`;
