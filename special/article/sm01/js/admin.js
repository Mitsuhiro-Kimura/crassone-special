$('.slick').slick({
    centerMode: true,
    centerPadding: '15%',
    dots:true,
    focusOnSelect:true,
    responsive:[
        {
            breakpoint: 768,
            settings:{
                centerPadding: '0%',
            }
        },
    ]
});
	

function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();

//$(function() {
//  var $win = $(window),
//      $main = $('main'),
//      $nav = $('header'),
//      navHeight = $nav.outerHeight(),
//      navPos = $nav.offset().top,
//      fixedClass = 'is-fixed';
//
//  $win.on('load scroll', function() {
//    var value = $(this).scrollTop();
//    if ( value > navPos ) {
//      $nav.addClass(fixedClass);
//      $main.css('margin-top', navHeight);
//    } else {
//      $nav.removeClass(fixedClass);
//      $main.css('margin-top', '0');
//    }
//  });
//});