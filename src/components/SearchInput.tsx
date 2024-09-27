import { useSearchInput } from '@/hooks';
import styled from '@emotion/styled';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IProps {
	placeholder: string;
	onSearch: (query: string) => void;
}

const SearchInput: React.FC<IProps> = ({ placeholder, onSearch }) => {
	const { input, handleChnage, handleKeyUp } = useSearchInput({
		init: '',
		onSearch,
	});

	return (
		<Container>
			<StyleFontAwesomIcon icon={faMagnifyingGlass} />
			<input
				onChange={handleChnage}
				placeholder={placeholder}
				value={input}
				onKeyUp={handleKeyUp}
			/>
		</Container>
	);
};

export default SearchInput;

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 0.75rem 1rem;
	gap: 0.5rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid;
	border-image: ${({ theme }) => theme.gradients.strokeGradient} 1;

	& > input {
		padding: 0.375rem 0;
	}

	&:focus-within {
		border: 2px solid;
		border-image: ${({ theme }) => theme.gradients.strokeGradient} 1;
	}
`;

const StyleFontAwesomIcon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSizes.medium};
	padding: 0.75rem;
`;
