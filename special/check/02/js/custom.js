/**
 * CheckBox関連
 **/


$(function () {
  var clickFlg = true;
  $('.js-toggleBar-heading').on('click', function () {
    if (clickFlg) {//ボタン一時無効に
      clickFlg = false;
      $(this)
        .parent()
        .next('.toggleBar-body')
        .slideToggle('', function () {
          clickFlg = true;
        });
      if ($(this).hasClass('is-open')) {
        $(this).removeClass('is-open');
      } else {
        $(this).addClass('is-open');
      }
    }
  });

  $('.js-toggleBar-check').on('click', function () {
    $(this).toggleClass('is-checked');
  });

  $('.scroll_tablebox02').each(function() {
    $(this).bind('scroll', function() {
      $(this).removeClass('scroll_arrow02');
    });
  });

  // 使用されているリストの絞り込み
  var checkelistTotalInitial = $('.toggleBar').length;
  var checkelistTotal = checkelistTotalInitial;
  var checkedList = 0;

  $('.js-toggleBar-check').on('click', function () {
    checkedList = $('.toggleBar-check.is-checked').length;
    $('#js-checkedList').text(checkedList);
  });

  $('#js-type').on('change', function () {
    $('.toggleBar').addClass('is-hide');
    var category;
    if ($(this).val() !== '0') {
      $('.toggleBar-target-' + category).parents('.toggleBar').removeClass('is-hide');
      checkelistTotal = $('.toggleBar-target-' + category).parents('.toggleBar').length;
    } else {
      $('.toggleBar').removeClass('is-hide');
      checkelistTotal = checkelistTotalInitial;
    }

    $('#js-checkelist-total').text(checkelistTotal);
    $('.js-toggleBar-check').removeClass('is-checked');
    checkedList = 0;
    $('#js-checkedList').text(checkedList);
  });
});
