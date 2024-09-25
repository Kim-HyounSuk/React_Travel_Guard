const theme = {
	colors: {
		primary: '#7FA9FF',
		secondary: '#829CD2',
		background: '#020010',
		text: '#F0F0F0',
	},
	gradients: {
		backgroundGradient:
			'linear-gradient(180deg, rgba(10, 3, 58, 1) 0%, rgba(4, 0, 25, 1) 43%)',
		boxGradient: `
      radial-gradient(at top left, rgba(127, 169, 255, 0.2) 0%, rgba(0, 0, 0, 0)) 100%,
      rgba(8, 8, 8, 0.8)
    `,
		strokeGradient:
			'linear-gradient(135deg, rgba(127, 169, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)',
	},
	fontSizes: {
		small: '12px',
		medium: '16px',
		large: '20px',
	},
	fontWeights: {
		light: 300,
		regular: 400,
		medium: 500,
		bold: 700,
		extraBold: 800,
	},
	layout: {
		maxWidth: {
			mobile: '100%',
			tablet: '768px',
			largeTablet: '1024px',
			desktop: '1920px',
		},
		minWidth: {
			mobile: '320px',
		},
	},
};

export default theme;
