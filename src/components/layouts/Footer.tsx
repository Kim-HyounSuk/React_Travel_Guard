import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Footer = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		arrows: false,
		variableWidth: true,
		pauseOnHover: true,
	};

	return (
		<Container>
			<CustomSlider {...settings}>
				{[...Array(5)].map((_, idx) => (
					<SlideItem key={idx}>
						<img src="/image/logo_footer.png" alt={`footer-logo${idx}`} />
					</SlideItem>
				))}
			</CustomSlider>
		</Container>
	);
};

export default Footer;

const Container = styled.footer`
	width: 100%;
	max-width: ${({ theme }) => theme.layout.maxWidth.desktop};
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.background};
`;

const CustomSlider = styled(Slider)`
	.slick-slide {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const SlideItem = styled.div`
	padding: 0 1rem;
`;
