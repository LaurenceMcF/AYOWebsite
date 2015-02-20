$(function(){

  //Gallery Creation
  $( ".gallery" ).each(function(index, el){
    var $el = $(el);
    //Set height when we can
    //$el.css("height",
    //  $el.children(".gallery-img-container").children(".current").height());
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
      $el.css("height", future.height());
    });
  });

});
