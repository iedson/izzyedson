$(document).ready(function() {

//animate nav bar
$(window).on('scroll', function() {
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#startchange").css('background-color', '#2B2928');
       } else {
          $("#startchange").css('background-color', 'transparent');
       }
    });
  }
});


});
