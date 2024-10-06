// import Earth from '@/components/Earth';
import { Loading } from '@/components/common';
import styled from '@emotion/styled';
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const Earth = React.lazy(() => import('@/components/Earth'));

const BannerPage = () => {
	return (
		<Container>
			<Helmet>
				<title>TravelGuard - 3D 지도</title>
				<meta
					name="description"
					content="3D 지도를 통한 국가별 여행경보를 제공합니다."
				/>
				<meta name="keywords" content="국가별 여행경보, 여행 경보" />
			</Helmet>
			<Suspense fallback={<Loading />}>
				<Earth />
			</Suspense>
		</Container>
	);
};

export default BannerPage;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;
