import { SearchInput, Title } from '@/components/common';
import ICombinedData from '@/types/combinedData';
import useCombinedData from '@/utils/useCombinedData';
import { useEffect, useState } from 'react';

const MainPage = () => {
	// 복합 데이터 fetch
	const { data } = useCombinedData();
	const [countries, setCountries] = useState<ICombinedData[]>([]);

	useEffect(() => {
		if (!data) return;

		setCountries(data);
	}, [data]);

	const onSearch = (query: string) => {
		if (!data) return;

		const lowerQuery = query.toLowerCase();

		const filteredData = data?.filter(
			(country) =>
				country.country_nm.toLowerCase().includes(lowerQuery) ||
				country.country_eng_nm.toLowerCase().includes(lowerQuery),
		);

		setCountries(filteredData);
	};

	return (
		<>
			<Title
				data={{
					title: '국가별 정보',
					text: '국가별 현지 연락처, 사건•사고 정보, 문화 등 다양한 정보를 제공합니다.',
				}}
			/>
			<SearchInput onSearch={onSearch} placeholder={'국가명을 입력하세요.'} />
		</>
	);
};

export default MainPage;
