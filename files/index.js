$(function(){
  var log = (function(el){
    return function(text){
      el.html(el.html()+"<br />"+text);
    }
  })($(".log"))

  var page1 = $("#page1");
  var page2 = $("#page2");

  var hammerOptions = function(){
    return {recognizers: [
      [Hammer.Pan, {threshold:5, pointers:0}],
      [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
      [Hammer.Tap]
    ]};
  }
  page1.hammer(hammerOptions());
  page2.hammer(hammerOptions());
  page2.offset({left:$(window).width()});
  page2.width($(window).width());
  page1.width($(window).width())

  var Actions = {
    showPage: function(pagea, pageb, reverse) {
      if(!reverse){
        pagea.animate({left: 0-$(window).width()}, 100);
        pageb.animate({left: 0}, 100);
      }else{
        pagea.animate({left: 0}, 100);
        pageb.animate({left: $(window).width()}, 100);
      }
    },
    showNext: function() {
      Actions.showPage(page1, page2, false);
    },
    showCurrent: function() {
      Actions.showPage(page1, page2, true);
    },
    showPartPanel: function(value){
      page1.offset({left: value});
      page2.offset({left: $(window).width() + value});
    },
    panNext: function(e){
      var g = e.gesture;
      if(g.deltaX <= 0 && g.deltaX <= $(window).width()){
        Actions.showPartPanel(g.deltaX);
      }else if(g.deltaX < 0){
        Actions.showPartPanel(0);
      }
    },
    panNextEnd: function(e){
      var g = e.gesture;
      if(g.deltaX <= 0-( $(window).width() / 2)) {
        Actions.showNext();
      }else if(g.deltaX > 0-($(window).width() / 2)) {
        Actions.showCurrent();
      }
    },
  }

  page1
    .bind("panstart panmove", Actions.panNext)
    .bind("swipeleft", Actions.showNext)
    .bind("panend", Actions.panNextEnd);

  page2
    .bind("panstart panmove", Actions.panNext)
    .bind("swiperight", function(){Actions.showPage(page1, page2, true)})
    .bind("panend", Actions.panNextEnd)


})






























//
