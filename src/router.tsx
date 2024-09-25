import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layouts';
import { BannerPage, EmbassyPage, MainPage, PermissionPage } from '@/pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <BannerPage />,
			},
			{
				path: 'main/',
				element: <MainPage />,
			},
			{
				path: 'embassy/',
				element: <EmbassyPage />,
			},
			{
				path: 'permission/',
				element: <PermissionPage />,
			},
		],
	},
]);

export default router;
