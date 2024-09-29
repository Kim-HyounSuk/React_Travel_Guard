import { SearchInput, Title } from '@/components/common';
import Permission from '@/components/Permission';
import ICombinedData from '@/types/combinedData';
import useCombinedData from '@/utils/useCombinedData';
import useFilteredPermission from '@/utils/useFilteredPermission';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const PermissionPage = () => {
	const { data } = useCombinedData();
	const [countries, setCountries] = useState<ICombinedData[]>([]);
	const filtered = useFilteredPermission(data);

	useEffect(() => {
		if (!filtered) return;

		setCountries(filtered);
	}, [filtered]);

	const onSearch = (query: string) => {
		if (!filtered) return;

		query = query.trim();
		if (query === '') {
			setCountries(filtered);
			return;
		}

		const lowerQuery = query.toLowerCase();

		const filteredData = filtered.filter(
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
					title: '국가별 입국 허가요건',
					text: '국가별 입국 가능 기간, 입국 가능 여부, 입국시 여권 소지 여부를 확인할 수 있습니다.',
				}}
			/>
			<SearchInput onSearch={onSearch} placeholder={'국가명을 입력하세요.'} />
			<Permission data={countries} />
		</Container>
	);
};

export default PermissionPage;

const Container = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 0;
`;
