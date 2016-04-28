$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.slider').slider({
		full_width: true,
		indicators:false,
	});
	$('.modal-trigger').leanModal();
	$('.scrollspy').scrollSpy();

	$('#juice').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('deactivated');
		$('#juice-card').addClass('activated');
	}));
});