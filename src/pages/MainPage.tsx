import { SearchInput, Title, Wrapper } from '@/components/common';
import Countries from '@/components/Countries';
import ICombinedData from '@/types/combinedData';
import useCombinedData from '@/utils/useCombinedData';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const MainPage = () => {
	const { data } = useCombinedData();
	const [countries, setCountries] = useState<ICombinedData[]>([]);

	useEffect(() => {
		if (!data) return;

		setCountries(data);
	}, [data]);

	const onSearch = (query: string) => {
		if (!data) return;

		query = query.trim();
		if (query === '') {
			setCountries(data);
			return;
		}

		const lowerQuery = query.toLowerCase();

		const filteredData = data.filter(
			(country) =>
				country.country_nm.toLowerCase().includes(lowerQuery) ||
				country.country_eng_nm.toLowerCase().includes(lowerQuery),
		);

		setCountries(filteredData);
	};

	return (
		<Container>
			<Title
				data={{
					title: '국가별 정보',
					text: '국가별 현지 연락처, 사건•사고 정보, 문화 등 다양한 정보를 제공합니다.',
				}}
			/>
			<SearchInput onSearch={onSearch} placeholder={'국가명을 입력하세요.'} />
			<Countries data={countries} />
		</Container>
	);
};

export default MainPage;

const Container = styled(Wrapper)``;
