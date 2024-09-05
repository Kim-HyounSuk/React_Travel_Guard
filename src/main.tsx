import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ResetStyle from './styles/ResetStyle.ts';
import { Global } from '@emotion/react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Global styles={ResetStyle} />
		<App />
	</StrictMode>,
);
