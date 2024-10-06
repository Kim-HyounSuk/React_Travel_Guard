import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import ResetStyle from '@/styles/ResetStyle';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<ResetStyle />
					<GlobalStyle />
					<RouterProvider router={router} />
				</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={true} />
			</QueryClientProvider>
		</HelmetProvider>
	);
};

export default App;
