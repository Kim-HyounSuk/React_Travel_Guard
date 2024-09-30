import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layouts';
import { BannerPage, EmbassyPage, MainPage, PermissionPage } from '@/pages';
import DetailPage from './pages/DetailPage';

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
			{
				path: 'detail/:iso',
				element: <DetailPage />,
			},
		],
	},
]);

export default router;
