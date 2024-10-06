// import Earth from '@/components/Earth';
import { Loading } from '@/components/common';
import styled from '@emotion/styled';
import React, { Suspense } from 'react';

const Earth = React.lazy(() => import('@/components/Earth'));

const BannerPage = () => {
	return (
		<Container>
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
