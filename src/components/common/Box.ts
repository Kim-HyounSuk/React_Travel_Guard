import styled from '@emotion/styled';

const Box = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.gradients.boxGradient};
	border: 1px solid;
	border-image: ${({ theme }) => theme.gradients.strokeGradient} 1;
	padding: 1rem;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: ${({ theme }) => theme.colors.primary};
	}
`;

export default Box;
