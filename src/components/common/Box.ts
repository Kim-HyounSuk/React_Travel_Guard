import styled from '@emotion/styled';

const Box = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.gradients.boxGradient};
	border: 1px solid;
	border-image: ${({ theme }) => theme.gradients.strokeGradient} 1;
	padding: 1rem;
`;

export default Box;
