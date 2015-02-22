$(function(){

  //Set height of hero to window height
  var height = Math.max(500,$(window).height()-$(".fixedtop").height());
  $("#hero").css("height", height);

  //Set rays size (depending on height of window)
  $(".rays")
    .css("height", height*2)
    .css("width", height*2)
    .css("bottom", 0-height)
    .css("margin-left", 0-height);

  //Fixed top menu
  $(window).scroll(function () {
      if ($(window).scrollTop() > height) {
          $('.fixedtop').addClass('fixed');
      } else {
          $('.fixedtop').removeClass('fixed');
      }
  });
  $(".fixedtop ul li").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("data-goto")).offset().top - $(".fixedtop").height()
    }, 100)
  });

  //Donate link
  $("#likeoremaildonate").click(function() {
    $("html, body").animate({
      scrollTop: $(".supporters").offset().top - $(".fixedtop").height()
    }, 100)
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

  //Gallery creation function
  function creategallery($el, data){
    var images = [];
    var current = 0;
    var width = $el.children(".imgcontainer").width();
    var height = $el.children(".imgcontainer").height();
    for(var i = 0; i < data.length; i++){
      images[i] = $("<img>").attr("src", data[i].image).css("opacity", 0);
      $el.children(".imgcontainer").append(images[i]);
    }
    images[current].css("opacity", 1);
    $el.children(".prev, .next").click(function(){
      if($(this).hasClass("prev")){
        current = current == 0 ? images.length - 1 : current - 1;
      }else{
        current = (current + 1) % images.length;
      }
      images[current].css("opacity", 1);
      for(var i = 0; i < images.length; i++){
        if(i != current){
          images[i].css("opacity", 0);
        }
      }
    });
  }

  //Gallery
  creategallery($(".gallerypopup .gallery"), galleryNoVid);
  $(".showGallery").click(function(e){
    var close = function(){
        $(".popupBacking").hide();
        $(".gallerypopup").hide();
        $('body').css('overflow', 'auto');
      };
      $(".popupBacking").show().click(close);
    $(".gallerypopup").show();
    $(".gallerypopup .closepopup").click(close);
    $('body').css('overflow', 'hidden');
  });

  //History
  creategallery($(".historygallery .gallery"), posters);

});
