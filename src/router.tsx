import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layouts';
import { Main } from '@/pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Main />,
			},
		],
	},
]);

export default router;
