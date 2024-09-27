import styled from '@emotion/styled';

const Badge = styled.div<{ color: string; isTab: boolean }>`
	width: ${({ isTab }) => (isTab ? '0.75rem' : '1.25rem')};
	height: ${({ isTab }) => (isTab ? '0.75rem' : '1.25rem')};
	background-color: ${({ color }) => color};
	border-radius: 0.125rem;
`;

export default Badge;
