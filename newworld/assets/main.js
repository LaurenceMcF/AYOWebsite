$(function(){

  //Set height of hero to window height
  $("#hero").css("height", $(window).height());

  //Scroll to location
  var $root = $('html, body');
  $('a').click(function() {
    var href = $.attr(this, 'href');
    var $toel = $('[name="' + $.attr(this, 'href').substr(1) + '"]');
    if($toel.length > 0){
      $root.animate({
        scrollTop: $toel.offset().top - $('.floating-menu').height()
      }, 500, function () {
        //window.location.hash = href;
      });
      return false;
    }else{
      return true;
    }
  });

  //Fixed top menu
  var fixedTopTimer;
  $(window).scroll(function () {
      if ($(window).scrollTop() > $("#hero").height() + $(".hero-extra").height() - $('.floating-menu').height() - 2) {
        clearTimeout(fixedTopTimer);
        $('.floating-menu').css("visibility","visible");
        $('.floating-menu').css("opacity", "1");
      } else if($('.floating-menu').css("opacity") > 0) {
        $('.floating-menu').css("opacity", "0");
        fixedTopTimer = setTimeout(function(){
          $('.floating-menu').css("visibility","hidden");
        }, 300);
      }
  });

  //Side menu
  $(".show-side-menu").click(function(){
    var close = function(){
      $(".popupBacking").hide();
      $('.side-menu').css('left', '-75%');
    };
    $(".popupBacking").show().click(close);
    $('.side-menu').css('left', '0');
    $('.side-menu a').click(close);
  });

  //Join mail
  $(".joinmail").click(function(e){
    var close = function(){
      $(".popupBacking").hide();
      $(".mailpopup").hide();
      $('body').css('overflow', 'auto');
    };
    $(".popupBacking").show().click(close);
    var popup = $(".mailpopup");
    var name = $(this).html();
    popup.children(".popupclose").click(close);
    popup.show();
    $('body').css('overflow', 'hidden');
  });


  //Programme menu
  $(".expanderdown li .head").click(function(e){
    var el = $(this).parent();
    if(el.hasClass("reveal")){
      el.removeClass("reveal");
      el.children(".detailscontainer").css({
        "height": 0,
      });
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
    if($(this).hasClass("hasdetails")){
      var close = function(){
        $(".popupBacking").hide();
        $(".orchpopup").hide();
        $('body').css('overflow', 'auto');
      };
      $(".popupBacking").show().click(close);
      var popup = $(".orchpopup");
      var name = $(this).html();
      popup.children(".orchpopupname").html(name);
      popup.children(".popupclose").click(close);
      popup.children(".orchpopuptext").html(people[name]['text']);
      popup.children(".orchpopupimg").attr("src", "");
      popup.children(".orchpopupimg").attr("src", people[name]['image']);
      popup.show();
      $('body').css('overflow', 'hidden');
    }
  })
  $(".orchestra ul li").each(function(){
    if(people[$(this).html()]){
      $(this).addClass("hasdetails");
    }
  })

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
