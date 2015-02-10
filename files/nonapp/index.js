$(function(){

  //Set height of hero to window height
  $("#hero").css("height", $(window).height());

  //Set rays size
  $(".rays")
    .css("height", $(window).height()*2)
    .css("width", $(window).height()*2)
    .css("bottom", 0-$(window).height())
    .css("margin-left", 0-$(window).height());

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
