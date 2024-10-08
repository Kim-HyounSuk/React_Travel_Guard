import { Loading, SearchInput, Title, Wrapper } from '@/components/common';
// import Permission from '@/components/Permission';
import ICombinedData from '@/types/combinedData';
import useCombinedData from '@/utils/useCombinedData';
import useFilteredPermission from '@/utils/useFilteredPermission';
import styled from '@emotion/styled';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PermissionContent = React.lazy(() => import('@/components/Permission'));

const PermissionPage = () => {
	const { data } = useCombinedData();
	const [countries, setCountries] = useState<ICombinedData[] | null>(null);
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
			<Helmet>
				<title>{`TravelGuard - 국가별 입국 허가요건`}</title>
				<meta
					name="description"
					content="국가별 입국 가능 기간, 입국 가능 여부, 입국시 여권 소지 여부를 확인할 수 있습니다."
				/>
				<meta
					name="keywords"
					content="입국 가능 기간, 입국 가능 여부, 입국시 여권 소지 여부, 여권, 입국"
				/>
			</Helmet>
			<Suspense fallback={<Loading />}>
				<Title
					data={{
						title: '국가별 입국 허가요건',
						text: '국가별 입국 가능 기간, 입국 가능 여부, 입국시 여권 소지 여부를 확인할 수 있습니다.',
					}}
				/>
				<SearchInput onSearch={onSearch} placeholder={'국가명을 입력하세요.'} />
				{countries ? <PermissionContent data={countries} /> : <Loading />}
			</Suspense>
		</Container>
	);
};

export default PermissionPage;

const Container = styled(Wrapper)``;
