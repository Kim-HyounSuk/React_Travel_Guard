import React, { useCallback, useState } from 'react';

interface IUseSearhInput {
	init: string;
	onSearch: (query: string) => void;
}

const useSearchInput = ({ init, onSearch }: IUseSearhInput) => {
	const [input, setInput] = useState(init);

	const handleChnage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	}, []);

	const handleKeyUp = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter' && input.trim()) onSearch(input);
		},
		[input, onSearch],
	);

	return { input, handleChnage, handleKeyUp };
};

export default useSearchInput;
