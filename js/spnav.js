//spNav
$('.navBtn').click(function() {
	$('#spNavArea').toggleClass('navOpen');

	var headerH = $('#spNavArea').outerHeight();
	if ($('#spNavArea').hasClass('navOpen')) {
		$('#spNavArea nav').css('marginTop', headerH + 'px');
	}
});

$('.overlay').click(function() {
	$(this).fadeOut(300);
	$('#spNavArea').removeClass('navOpen');
});

$('a').click(function() {
	$('.overlay').fadeOut(300);
	$('#spNavArea').removeClass('navOpen');
});