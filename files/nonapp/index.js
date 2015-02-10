$(function(){

  //Set height of hero to window height
  $("#hero").css("height", $(window).height());

  //Set rays size
  $(".rays")
    .css("height", $(window).height()*2)
    .css("width", $(window).height()*2)
    .css("bottom", 0-$(window).height())
    .css("margin-left", 0-$(window).height());

  //Programme menu
  $(".programme li .head").click(function(e){
    var el = $(this).parent();
    if(el.hasClass("reveal")){
      el.removeClass("reveal");
      el.children(".detailscontainer").css({
        "height": 0,
      });
    }else{
      el.addClass("reveal");
      el.children(".detailscontainer").css({
        "height": el.children(".detailscontainer").children(".details").outerHeight(),
      });
    }
  });

});
