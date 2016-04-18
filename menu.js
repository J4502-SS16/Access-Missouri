$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('nav ul').slideToggle(500);
  });
  // Now turn off the display none property.
  $(window).resize(function(){
    if($(window).width()>700){
      $('nav ul').removeAttr('style');
    }
  });
});

// "$(document).ready(function());"means the javascript won't do anything until the page is ready.
