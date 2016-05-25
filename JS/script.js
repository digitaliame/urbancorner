

$(document).ready(function(){
	$('#popup').hide();
	var tiempo = setTimeout(function(){
		$('#popup').fadeIn();
	}, 10000);

	$('#popupclose').on('click',(function (){
		$('#popup').fadeOut();
	}));

	$(".button-collapse").sideNav();
	$('.slider').slider({
		full_width: true,
		indicators:false,
	});
	$('.modal-trigger').leanModal();
	

	$('#juice').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('deactivated');
		$('#juice-card').addClass('activated');
		$('#ensaladas-card').removeClass('activated');
		$('#ensaladas-card').addClass('deactivated');
		$('#crepas-card').removeClass('activated');
		$('#crepas-card').addClass('deactivated');
		$('#smoothi-card').removeClass('activated');
		$('#smoothi-card').addClass('deactivated');
		$('#te-card').removeClass('activated');
		$('#te-card').addClass('deactivated');
		$('#cafe-card').removeClass('activated');
		$('#cafe-card').addClass('deactivated');
		$('#frappe-card').removeClass('activated');
		$('#frappe-card').addClass('deactivated');
	}));

	$('#deli').on('click',(function (){
		$('#deli-card').removeClass('deactivated');
		$('#deli-card').addClass('activated');
		$('#juice-card').removeClass('activated');
		$('#juice-card').addClass('deactivated');
		$('#ensaladas-card').removeClass('activated');
		$('#ensaladas-card').addClass('deactivated');
		$('#crepas-card').removeClass('activated');
		$('#crepas-card').addClass('deactivated');
		$('#smoothi-card').removeClass('activated');
		$('#smoothi-card').addClass('deactivated');
		$('#te-card').removeClass('activated');
		$('#te-card').addClass('deactivated');
		$('#cafe-card').removeClass('activated');
		$('#cafe-card').addClass('deactivated');
		$('#frappe-card').removeClass('activated');
		$('#frappe-card').addClass('deactivated');
	}));

	$('#ensaladas').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('activated');
		$('#juice-card').addClass('deactivated');
		$('#ensaladas-card').removeClass('deactivated');
		$('#ensaladas-card').addClass('activated');
		$('#crepas-card').removeClass('activated');
		$('#crepas-card').addClass('deactivated');
		$('#smoothi-card').removeClass('activated');
		$('#smoothi-card').addClass('deactivated');
		$('#te-card').removeClass('activated');
		$('#te-card').addClass('deactivated');
		$('#cafe-card').removeClass('activated');
		$('#cafe-card').addClass('deactivated');
		$('#frappe-card').removeClass('activated');
		$('#frappe-card').addClass('deactivated');
	}));

	$('#crepas').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('activated');
		$('#juice-card').addClass('deactivated');
		$('#ensaladas-card').removeClass('activated');
		$('#ensaladas-card').addClass('deactivated');
		$('#crepas-card').removeClass('deactivated');
		$('#crepas-card').addClass('activated');
		$('#smoothi-card').removeClass('activated');
		$('#smoothi-card').addClass('deactivated');
		$('#te-card').removeClass('activated');
		$('#te-card').addClass('deactivated');
		$('#cafe-card').removeClass('activated');
		$('#cafe-card').addClass('deactivated');
		$('#frappe-card').removeClass('activated');
		$('#frappe-card').addClass('deactivated');
	}));

	$('#smth').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('activated');
		$('#juice-card').addClass('deactivated');
		$('#ensaladas-card').removeClass('activated');
		$('#ensaladas-card').addClass('deactivated');
		$('#crepas-card').removeClass('activated');
		$('#crepas-card').addClass('deactivated');
		$('#smoothi-card').removeClass('deactivated');
		$('#smoothi-card').addClass('activated');
		$('#te-card').removeClass('activated');
		$('#te-card').addClass('deactivated');
		$('#cafe-card').removeClass('activated');
		$('#cafe-card').addClass('deactivated');
		$('#frappe-card').removeClass('activated');
		$('#frappe-card').addClass('deactivated');
	}));

	$('#te').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('activated');
		$('#juice-card').addClass('deactivated');
		$('#ensaladas-card').removeClass('activated');
		$('#ensaladas-card').addClass('deactivated');
		$('#crepas-card').removeClass('activated');
		$('#crepas-card').addClass('deactivated');
		$('#smoothi-card').removeClass('activated');
		$('#smoothi-card').addClass('deactivated');
		$('#te-card').removeClass('deactivated');
		$('#te-card').addClass('activated');
		$('#cafe-card').removeClass('activated');
		$('#cafe-card').addClass('deactivated');
		$('#frappe-card').removeClass('activated');
		$('#frappe-card').addClass('deactivated');
	}));

	$('#cafe').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('activated');
		$('#juice-card').addClass('deactivated');
		$('#ensaladas-card').removeClass('activated');
		$('#ensaladas-card').addClass('deactivated');
		$('#crepas-card').removeClass('activated');
		$('#crepas-card').addClass('deactivated');
		$('#smoothi-card').removeClass('activated');
		$('#smoothi-card').addClass('deactivated');
		$('#te-card').removeClass('activated');
		$('#te-card').addClass('deactivated');
		$('#cafe-card').removeClass('deactivated');
		$('#cafe-card').addClass('activated');
		$('#frappe-card').removeClass('activated');
		$('#frappe-card').addClass('deactivated');
	}));

	$('#frappe').on('click',(function (){
		$('#deli-card').removeClass('activated');
		$('#deli-card').addClass('deactivated');
		$('#juice-card').removeClass('activated');
		$('#juice-card').addClass('deactivated');
		$('#ensaladas-card').removeClass('activated');
		$('#ensaladas-card').addClass('deactivated');
		$('#crepas-card').removeClass('activated');
		$('#crepas-card').addClass('deactivated');
		$('#smoothi-card').removeClass('activated');
		$('#smoothi-card').addClass('deactivated');
		$('#te-card').removeClass('activated');
		$('#te-card').addClass('deactivated');
		$('#cafe-card').removeClass('activated');
		$('#cafe-card').addClass('deactivated');
		$('#frappe-card').removeClass('deactivated');
		$('#frappe-card').addClass('activated');
	}));


});