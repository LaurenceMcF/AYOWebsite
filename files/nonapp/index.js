$(function(){

  //Set height of hero to window height
  $("#hero").css("height", $(window).height());

  //Set rays size
  $(".rays")
    .css("height", $(window).height()*2)
    .css("width", $(window).height()*2)
    .css("bottom", 0-$(window).height())
    .css("margin-left", 0-$(window).height());

  //Do the animation of the logos
  var logoEl = $("#hero .logo");
  var smalllogoEl = $("#hero .smalllogotext");
  var mdsumEl = $("#hero .midsumtext");

  var height = $(window).height();
  var width = $(window).width();

  logoEl.css("left", (width - logoEl.width())/2);
  logoEl.css("top", 20);
  mdsumEl.css("left", (width - mdsumEl.width())/2);
  mdsumEl.css("top", (height - mdsumEl.height()));
  smalllogoEl.css("left", (width - logoEl.width())/2);
  smalllogoEl.css("top", 20);

  logoEl.css("transition", "all 1s");
  mdsumEl.css("transition", "all 1s");
  smalllogoEl.css("transition", "all 1s");

  mdsumEl.css("top", (height - mdsumEl.height())/2);

  logoEl.css("left", width/2 - logoEl.width());
  smalllogoEl.css("left", width/2);
  smalllogoEl.css("opacity", 1);


  //Programme List javascript
  var wrapEl = $(".wrapper");
  var minHeight = $(".programmelist").outerHeight();
  wrapEl.css("height", minHeight);
  $(".programmelist ul li").click(function(e){
    $(".programmelist ul li").removeClass("vis");
    $(this).addClass("vis");
    $(".programmedetail div").css("opacity", 0);
    var detailEl = $(".programmedetail div[data-prog-item='"+$(this).attr("data-prog-item")+"']");
    detailEl.css("opacity", 1);
    wrapEl.css("height", Math.max(detailEl.outerHeight(), minHeight));
  })

});
