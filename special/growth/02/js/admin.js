$(document).ready(function() {
  var fixedElm = $('#fixedBox'); // fixedする要素
  var fixedStart = $('#step2'); // この要素の上部が画面に表示されたらfixed要素の表示開始
  var fixedEnd = $('#contact'); // この要素の上部が画面に表示されたらfixedが解除される

  fixedElm.css({'display':'none', 'opacity':'0'});

  $(window).on('scroll touchmove',function(){
      var fixedStartVal = fixedStart.offset().top - $(window).height();
      var fixedEndVal = fixedEnd.offset().top - $(window).height();
      if ($(window).scrollTop() < fixedStartVal) {
          fixedElm.css({'display':'none', 'opacity':'0'}).stop();
      } else if ($(window).scrollTop() > fixedEndVal) {
          fixedElm.css({'display':'none', 'opacity':'0'}).stop();
      } else {
          fixedElm.css({'position':'fixed', 'display':'block', 'opacity':'1'}).delay(500).fadeIn('fast');
      }
  });
});
