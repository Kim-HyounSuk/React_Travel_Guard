import styled from '@emotion/styled/macro';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IProps {
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const SearchInput: React.FC<IProps> = ({ placeholder, onChange, value }) => {
	return (
		<Container>
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			<Input onChange={onChange} placeholder={placeholder} value={value} />
		</Container>
	);
};

export default SearchInput;

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Input = styled.input`
	flex: 1;
`;
