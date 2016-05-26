

$(document).ready(function(){

	$(".button-collapse").sideNav();

	$('#mobile-btn').on('click',(function (){
		$('#mobile-demo').css(' transform', 'translateX(0px);')
	}));

	$('#popup').hide();

	setTimeout(function(){
		$('#popup').fadeIn();
	}, 5000);

	$('#popupclose').on('click',(function (){
		$('#popup').fadeOut();
	}));

	
	$('.slider').slider({
		full_width: true,
		indicators:false,
	});
	$('.modal-trigger').leanModal();
	
	

});