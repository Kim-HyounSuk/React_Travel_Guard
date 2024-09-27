import { SearchInput } from '@/components/common';
import React, { useState } from 'react';

const MainPage = () => {
	const [input, setInput] = useState<string>('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const onSearch = () => {
		console.log(input);
	};

	return (
		<div>
			<SearchInput
				onSearch={onSearch}
				value={input}
				onChange={onChange}
				placeholder={'국가명을 입력하세요.'}
			/>
		</div>
	);
};

export default MainPage;
