import styled from '@emotion/styled';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';

interface IProps {
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSearch: () => void;
	value: string;
}

const SearchInput: React.FC<IProps> = ({
	placeholder,
	onChange,
	value,
	onSearch,
}) => {
	const handleKeyUp = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				onSearch();
			}
		},
		[onSearch],
	);

	return (
		<Container>
			<StyleFontAwesomIcon icon={faMagnifyingGlass} />
			<input
				onChange={onChange}
				placeholder={placeholder}
				value={value}
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
