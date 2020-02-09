//SLIDERS
$('.team__row').slick({
	infinite: false,
	centerMode: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	responsive: [
	{
		breakpoint: 993,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});
