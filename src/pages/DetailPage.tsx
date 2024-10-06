import { useEmbassies, useNotices } from '@/api';
import { Loading, Title, Wrapper } from '@/components/common';
// import DetailContent from '@/components/DetailContent';
import ICombinedData from '@/types/combinedData';
import { IEmbassy } from '@/types/embassies';
import { INotice } from '@/types/notices';
import useCombinedData from '@/utils/useCombinedData';
import styled from '@emotion/styled';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailContent = React.lazy(() => import('@/components/DetailContent'));

const DetailPage = () => {
	const { iso } = useParams();
	const { data: combiendData } = useCombinedData();
	const { data: embassiesData } = useEmbassies();
	const { data: noticesData } = useNotices(iso?.toUpperCase() as string);

	const [country, setCountry] = useState<ICombinedData | undefined>(undefined);
	const [embassies, setEmbassies] = useState<IEmbassy[] | undefined>(undefined);

	useEffect(() => {
		if (!combiendData || !embassiesData || !iso) return;

		const filteredCombinedInfo = combiendData.find(
			(country) => country.country_iso_alp2 === iso.toUpperCase(),
		);

		const filteredembassiesInfo = embassiesData.data.filter(
			(country) => country.country_iso_alp2 === iso.toUpperCase(),
		);

		setCountry(filteredCombinedInfo);
		setEmbassies(filteredembassiesInfo);
	}, [combiendData, embassiesData, iso]);

	const isLoading = country && embassies && noticesData;

	return (
		<Container>
			<Suspense fallback={<Loading />}>
				<Title
					data={{
						title: '국가별 상세정보',
						text: '국가별 안전공지, 여행경보 지도, 입국 허가 요건, 제외공광 정보를 확인할 수 있습니다.',
					}}
				/>
				{isLoading ? (
					<DetailContent
						country={country as ICombinedData}
						notices={noticesData?.data as INotice[]}
						embassies={embassies as IEmbassy[]}
					/>
				) : (
					<Loading />
				)}
			</Suspense>
		</Container>
	);
};

export default DetailPage;

const Container = styled(Wrapper)`
	padding-bottom: 3rem;
`;
