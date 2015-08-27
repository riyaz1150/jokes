$(document).ready(function () {
	
	$('#toggle-view li').click(function () {
		
		$('div.panel').slideUp('200');
		var text = $(this).children('div.panel');

		if (text.is(':hidden')) {
			text.slideDown('200');
			$(this).children('span').html('-');		
		} else {
			text.slideUp('200');
			$(this).children('span').html('+');		
		}
		
	});
	
	$('.inner_ul li:last-child').css('border','0px');

});