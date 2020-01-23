$(document).ready(function() {

$(window).on('scroll', function() {
    $('#navigation').css('opacity', 'hide');
    var scrollTop = $(window).scrollTop();
    if (scrollTop <= 0) {
      $('#navigation').stop().animate();
      $('#navigation').animate({opacity:'show'},1000, function(){
      $('#navigation').animate({opacity:'hide'},500);
    })} else {
      $('#navigation').stop().animate();
      $('#navigation').animate({opacity:'show'},1000, function(){
      })}
  });


});
