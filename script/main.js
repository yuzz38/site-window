$(function(){
	$('.cirlcle-btn').on('move', function(){
		
			$('.circle-wrapper').addClass('circle-wrapper--active');
			
		});
	
	$('.cirlcle-btn1').mouseover (function(){
		
			$('.circle-wrapper1').addClass('circle-wrapper--hover');
			
		});
	$('.cirlcle-btn1').mouseout (function(){
		
			$('.circle-wrapper1').removeClass('circle-wrapper--hover');
			
		});
	$('.cirlcle-btn2').mouseover (function(){
		
			$('.circle-wrapper2').addClass('circle-wrapper--hover');
			
		});
	$('.cirlcle-btn2').mouseout (function(){
		
			$('.circle-wrapper2').removeClass('circle-wrapper--hover');
			
		});
	$('.cirlcle-btn3').mouseover (function(){
		
			$('.circle-wrapper3').addClass('circle-wrapper--hover');
			
		});
	$('.cirlcle-btn3').mouseout (function(){
		
			$('.circle-wrapper3').removeClass('circle-wrapper--hover');
			
		});
	$('.cirlcle-btn4').mouseover (function(){
		
			$('.circle-wrapper4').addClass('circle-wrapper--hover');
			
		});
	$('.cirlcle-btn4').mouseout (function(){
		
			$('.circle-wrapper4').removeClass('circle-wrapper--hover');
			
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
