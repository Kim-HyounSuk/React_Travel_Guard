import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Loading } from '@/components/common';
import Layout from '@/components/layouts';
import {
	BannerPage,
	// 	DetailPage,
	// 	EmbassyPage,
	// 	MainPage,
	// 	PermissionPage,
} from '@/pages';

const MainPage = React.lazy(() => import('@/pages/MainPage'));
const EmbassyPage = React.lazy(() => import('@/pages/EmbassyPage'));
const PermissionPage = React.lazy(() => import('@/pages/PermissionPage'));
const DetailPage = React.lazy(() => import('@/pages/DetailPage'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loading />}>
						<BannerPage />
					</Suspense>
				),
			},
			{
				path: 'main/',
				element: (
					<Suspense fallback={<Loading />}>
						<MainPage />
					</Suspense>
				),
			},
			{
				path: 'embassy/',
				element: (
					<Suspense fallback={<Loading />}>
						<EmbassyPage />
					</Suspense>
				),
			},
			{
				path: 'permission/',
				element: (
					<Suspense fallback={<Loading />}>
						<PermissionPage />
					</Suspense>
				),
			},
			{
				path: 'detail/:iso',
				element: (
					<Suspense fallback={<Loading />}>
						<DetailPage />
					</Suspense>
				),
			},
		],
	},
]);

export default router;
