import { useEmbassies } from '@/api';
import { Loading, SearchInput, Title, Wrapper } from '@/components/common';
// import Embassy from '@/components/Embassy';
import { IEmbassy } from '@/types/embassies';
import styled from '@emotion/styled';
import React, { Suspense, useEffect, useState } from 'react';

const EmbassyContent = React.lazy(() => import('@/components/Embassy'));

const EmbassyPage = () => {
	const { data } = useEmbassies();
	const [embassies, setEmbassies] = useState<IEmbassy[] | null>(null);

	const onSearch = (query: string) => {
		if (!data || !embassies) return;

		query = query.trim();
		if (query === '') {
			setEmbassies(data.data);
			return;
		}

		const lowerQuery = query.toLowerCase();

		const filtredData = embassies.filter(
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
