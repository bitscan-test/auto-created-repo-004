jQuery(function($){

/*-----------------------------
 タブレットVIEWPORT
-----------------------------*/

var ua = navigator.userAgent;
if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
  // スマホのとき
  $('head').prepend('<meta name="viewport" content="width=414,user-scalable=1">');
}else{
  // PC・タブレットのとき
  $('head').prepend('<meta name="viewport" content="width=1200,user-scalable=1">');
}

/*-----------------------------
 ページ内リンク
-----------------------------*/

$('a[href^=#]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);

  if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
    var offset = 10;
  }else{
    var offset = 50;
  }

  var position = target.offset().top - offset;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});

/*-----------------------------
 スマホメニュー
-----------------------------*/

/*
$('a.sp-menu').click(function() {
  $('nav').slideToggle(200);
  return false;
});
*/

/*-----------------------------
 スマホ電話リンク
-----------------------------*/

if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
  $("a.tel-link").each(function(){
    $(this).replaceWith("<span>" + $(this).html() + "</span>");
  });
}

/*-----------------------------
 ヘッダー固定
-----------------------------*/

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    $('nav').addClass('fixed');
    $('#index-top .logo2, #index-top .logo, header .logo, .info .contact .btn a').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
    $('#index-top .logo2, #index-top .logo, header .logo, .info .contact .btn a').removeClass('fixed');
  }
});

/*-----------------------------
 WOW（スクロールでフェードイン）
-----------------------------*/

new WOW().init();

});

//spNavArea
$('#container').prepend('<div class="overlay"></div>');

$('.navBtn').click(function() {
	$('#spNavArea').toggleClass('navOpen');
	$('#container').toggleClass('fixed');
	$('.overlay').toggle();

	var headerH = $('#spNavArea').outerHeight();
	if ($('#spNavArea').hasClass('navOpen')) {
		$('#spNavArea nav').css('marginTop', headerH + 'px');
	}
});

$('.overlay').click(function() {
	$(this).fadeOut(300);
	$('#spNavArea').removeClass('navOpen');
	$('#container').removeClass('fixed');
});

$('a').click(function() {
	$('.overlay').fadeOut(300);
	$('#spNavArea').removeClass('navOpen');
	$('#container').removeClass('fixed');
});