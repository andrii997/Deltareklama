$(document).ready(function() {

	$(".banner .arrow-up").click(function(){
		$(".banner").css('background-image', 'url(img/main/banner1.jpg)');
		$(".banner-descr").text('Комплексное оформление ТРЦ рекламными конструкциями');
	});

	$(".banner .arrow-middle").click(function(){
		$(".banner").css('background-image', 'url(img/main/banner2.jpg)');
		$(".banner-descr").text('Контражурные логотипы для крупных компаний');
	});

	$(".banner .arrow-down").click(function(){
		$(".banner").css('background-image', 'url(img/main/banner3.jpg)');
		$(".banner-descr").text('Комплексное оформление ТРЦ рекламными конструкциями');
	});


	$('.slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  arrows: false,
	  dots: true,
	  responsive: [{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }]
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	/*Header menu*/

	$(".header__menu img").click(function(e){
		e.preventDefault();
		$("#menu").toggleClass("show");
	});

	$("#menu a").click(function(){

		setTimeout(function() {
			$(".header__menu img").click();
		}, 200);
		
	});

	$(document).on('click','.milk-shadow',function(){
		$(".header__menu img").click();
	});


	/*feedback form*/

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".banner .num .animate").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step},
			3000);
	});

	new TypeIt(".banner .banner-descr", {
	  speed: 25
	}).go();

});

$(document).on('click', '.popup-modal-dismiss', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});