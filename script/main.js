$(function(){
	$('.cirlcle-btn').on('move', function(){
		
			$('.circle-wrapper').addClass('circle-wrapper--active');
			
		});
	$('.cirlcle-btn1').on('click', function(){
		
			$('.circle-wrapper1').toggleClass('circle-wrapper--clicked');
			$('.circle-wrapper2').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper3').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper4').removeClass('circle-wrapper--clicked');

		});
	
	$('.cirlcle-btn2').on('click', function(){
			$('.circle-wrapper2').toggleClass('circle-wrapper--clicked');
			$('.circle-wrapper1').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper3').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper4').removeClass('circle-wrapper--clicked');
		});
	$('.cirlcle-btn3').on('click', function(){
			$('.circle-wrapper3').toggleClass('circle-wrapper--clicked');
			$('.circle-wrapper2').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper4').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper1').removeClass('circle-wrapper--clicked');
			
		});
	$('.cirlcle-btn4').on('click', function(){
			$('.circle-wrapper4').toggleClass('circle-wrapper--clicked');
			$('.circle-wrapper1').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper2').removeClass('circle-wrapper--clicked');
			$('.circle-wrapper3').removeClass('circle-wrapper--clicked');

		});
});
