/** @jsxImportSource @emotion/react */
import { css, Global, useTheme } from '@emotion/react';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = () => {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				html,
				body,
				#root {
					width: 100%;
					height: 100%;
					min-height: 100%;
				}
				* {
					box-sizing: border-box;
					font-family:
						'Pretendard Variable',
						Pretendard,
						-apple-system,
						BlinkMacSystemFont,
						system-ui,
						Roboto,
						'Helvetica Neue',
						'Segoe UI',
						'Apple SD Gothic Neo',
						'Noto Sans KR',
						'Malgun Gothic',
						'Apple Color Emoji',
						'Segoe UI Emoji',
						'Segoe UI Symbol',
						sans-serif;
					color: ${theme.colors.text};
					font-size: ${theme.fontSizes.regular};
				}
				body {
					background-image: ${theme.gradients.backgroundGradient};
					background-repeat: no-repeat;
				}
			`}
		/>
	);
};

export default GlobalStyle;
