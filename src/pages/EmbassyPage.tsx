import { useEmbassies } from '@/api';
import { SearchInput, Title, Wrapper } from '@/components/common';
import Embassy from '@/components/Embassy';
import { IEmbassy } from '@/types/embassies';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const EmbassyPage = () => {
	const { data } = useEmbassies();
	const [embassies, setEmbassies] = useState<IEmbassy[]>([]);

	const onSearch = (query: string) => {
		if (!data) return;

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
			<Embassy data={embassies} />
		</Container>
	);
};

export default EmbassyPage;

const Container = styled(Wrapper)``;
