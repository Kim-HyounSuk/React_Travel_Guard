import { useEmbassies, useNotices } from '@/api';
import { Title, Wrapper } from '@/components/common';
import DetailContent from '@/components/DetailContent';
import ICombinedData from '@/types/combinedData';
import { IEmbassy } from '@/types/embassies';
import { INotice } from '@/types/notices';
import useCombinedData from '@/utils/useCombinedData';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
	const { iso } = useParams();
	const { data: combiendData } = useCombinedData();
	const { data: embassiesData } = useEmbassies();
	const { data: noticesData } = useNotices(iso?.toUpperCase() as string);

	const [country, setCountry] = useState<ICombinedData>();
	const [embassies, setEmbassies] = useState<IEmbassy[]>();

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

	return (
		<Container>
			<Title
				data={{
					title: '국가별 상세정보',
					text: '국가별 안전공지, 여행경보 지도, 입국 허가 요건, 제외공광 정보를 확인할 수 있습니다.',
				}}
			/>
			{country && embassies && noticesData && (
				<DetailContent
					country={country as ICombinedData}
					notices={noticesData?.data as INotice[]}
					embassies={embassies as IEmbassy[]}
				/>
			)}
		</Container>
	);
};

export default DetailPage;

const Container = styled(Wrapper)`
	padding-bottom: 3rem;
`;
