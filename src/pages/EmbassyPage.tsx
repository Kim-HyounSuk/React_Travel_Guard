import { useEmbassies } from '@/api';
import { Loading, SearchInput, Title, Wrapper } from '@/components/common';
// import Embassy from '@/components/Embassy';
import { IEmbassy } from '@/types/embassies';
import styled from '@emotion/styled';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const EmbassyContent = React.lazy(() => import('@/components/Embassy'));

const EmbassyPage = () => {
	const { data } = useEmbassies();
	const [embassies, setEmbassies] = useState<IEmbassy[] | null>(null);

	const onSearch = (query: string) => {
		if (!data) return;

		query = query.trim();
		if (query === '') {
			setEmbassies(data.data);
			return;
		}

		if (query === '중국') query = 'china';
		if (query === '미국') query = '미합중국';

		const lowerQuery = query.toLowerCase();

		const filtredData = data.data.filter(
			(embassy) =>
				embassy.embassy_kor_nm.toLowerCase().includes(lowerQuery) ||
				embassy.country_nm.toLowerCase().includes(lowerQuery) ||
				embassy.country_eng_nm.toLowerCase().includes(lowerQuery),
		);

		setEmbassies(filtredData);
	};

	useEffect(() => {
		if (!data) return;

		setEmbassies(data.data);
	}, [data]);

	return (
		<Container>
			<Helmet>
				<title>{`TravelGuard - 국가별 재외공관 정보`}</title>
				<meta
					name="description"
					content="국가별 재외공관 위치, 연락처 등을 확인할 수 있습니다."
				/>
				<meta
					name="keywords"
					content="국가별, 재외공관, 재외공관 위치, 재외공관 연락처, 위치, 연락처"
				/>
			</Helmet>
			<Suspense fallback={<Loading />}>
				<Title
					data={{
						title: '국가별 재외공관 정보',
						text: '국가별 재외공관 위치, 연락처 등을 확인할 수 있습니다.',
					}}
				/>
				<SearchInput
					onSearch={onSearch}
					placeholder={'국가 또는 지역을 입력하세요.'}
				/>
				{embassies ? <EmbassyContent data={embassies} /> : <Loading />}
			</Suspense>
		</Container>
	);
};

export default EmbassyPage;

const Container = styled(Wrapper)``;
