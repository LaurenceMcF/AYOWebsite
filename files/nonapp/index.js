$(function(){

  //Set height of hero to window height
  $("#hero").css("height", $(window).height());

  //Set rays size (depending on height of window)
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

  //Orchestra popups
  $(".orchestra ul li").not(".instrument").click(function(e){
    var close = function(){
      $(".popupBacking").hide();
      $(".orchpopup").hide();
    };
    $(".popupBacking").show().click(close);
    var popup = $(".orchpopup");
    var name = $(this).html();
    popup.css("left", ($(window).width() - popup.width())/2)
    popup.children(".orchpopupname").html(name);
    popup.children(".orchpopupclose").click(close);
    popup.children(".orchpopuptext").html(people[name]['text']);
    popup.children(".orchpopupimg").attr("src", people[name]['image']);
    popup.show();
  })

  var people = {
    "harris":{
      image:"rays.svg", text:"sdkjfgsdkfjhsdfjhsdkfjhalkjhafds"
    },
    "Harris":{
      image:"Cloud01.svg", text:"tiyouiyoyuio"
    }
  }

});
