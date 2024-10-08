import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string;
			secondary: string;
			background: string;
			text: string;
		};
		gradients: {
			backgroundGradient: string;
			boxGradient: string;
			strokeGradient: string;
		};
		fontSizes: {
			small: string;
			regular: string;
			medium: string;
			large: string;
		};
		fontWeights: {
			light: number;
			regular: number;
			medium: number;
			bold: number;
			extraBold: number;
		};
		layout: {
			maxWidth: {
				mobile: string;
				largeMobile: string;
				tablet: string;
				largeTablet: string;
				desktop: string;
			};
			minWidth: {
				mobile: string;
			};
		};
	}
}
