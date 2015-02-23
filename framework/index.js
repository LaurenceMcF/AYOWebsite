$(function(){

  //Top menu
  var height = 600 - $('.menu').height();
  var adjMenuOpacity = function(){
    if ($(window).scrollTop() > height) {
      $('.menu').css("background-color", 'rgba(161, 20, 20, 0.8)');
      //$('.menu .logo-container').css("width", 150);
      $('.menu').addClass("c-main-dark-bg-transparent-shadow");
      $('.menu .logo-container').css("opacity", 0.75);
    } else {
      $('.menu').css("background-color", 'rgba(161, 20, 20, 0)');
      var opacity = $(window).scrollTop() / height * 0.8;
      var opacitylogo = 1  - $(window).scrollTop() / height * 0.25;
      var logosize = 250 - $(window).scrollTop() / height * 100;
      $('.menu').css("background-color", 'rgba(161, 20, 20, '+opacity+')');
      $('.menu').addClass("c-main-dark-bg-transparent-shadow");
      $('.menu').removeClass("c-main-dark-bg-transparent-shadow");
      $('.menu .logo-container').css("opacity", opacitylogo);
      //$('.menu .logo-container').css("width", logosize);
    }
  }
  $(window).scroll(adjMenuOpacity);
  adjMenuOpacity();

  //Gallery Creation
  $(".gallery").each(function(index, el){
    var $el = $(el);
    $el.children(".prev, .next").click(function(){

      var current = $el.children(".gallery-img-container").children(".current");
      var future;

      if($(this).hasClass("next")){
        future = current.next();
        if(future.length <= 0){
          future = $el.children(".gallery-img-container").children(":first");
        }
      }else{
        future = current.prev();
        if(future.length <= 0){
          future = $el.children(".gallery-img-container").children(":last");
        }
      }
      future.addClass("current").css("opacity", 1);
      current.removeClass("current").css("opacity", 0);
    });
  });


});
