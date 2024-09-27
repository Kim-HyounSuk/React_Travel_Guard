import { SearchInput } from '@/components/common';

const MainPage = () => {
	// Search 로직 구현하면 됨.
	const onSearch = (query: string) => {};

	return (
		<div>
			<SearchInput onSearch={onSearch} placeholder={'국가명을 입력하세요.'} />
		</div>
	);
};

export default MainPage;
