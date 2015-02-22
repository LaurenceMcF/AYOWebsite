$(function(){

  //Top menu
  var height = 600;
  var adjMenuOpacity = function(){
    if ($(window).scrollTop() > height) {
      $('.menu').css("background-color", 'rgba(161, 20, 20, 0.8)');
      //$('.menu .logo-container').css("width", 150);
    } else {
      $('.menu').css("background-color", 'rgba(161, 20, 20, 0)');
      var opacity = $(window).scrollTop() / height * 0.8;
      var logosize = 250 - $(window).scrollTop() / height * 100;
      $('.menu').css("background-color", 'rgba(161, 20, 20, '+opacity+')');
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

  $("#hero .can-click.do-hero-popup").click(function(){
    var $el = $(this);
    var $popup = $("#hero-popup-"+$el.attr("data-hero-popup"));

    if($popup.css("opacity")>0){
      $popup.css("opacity", 0);
      setTimeout(function(){
        $popup.css("display", "none");
      }, 100);
      $(this).removeClass("white-transparent-hover-sel");
    }else{
      $(".hero-popup").css("opacity", 0).each(function(){
        if($(this) != $popup){
          setTimeout(function(){
            $(this).css("display", "none");
          }, 100);
        }
      });
      $("#hero .can-click.do-hero-popup").removeClass("white-transparent-hover-sel");

      $popup.css("display", "block");
      $popup.css("opacity", 1);
      $el.addClass("white-transparent-hover-sel");
    }
  });

});
