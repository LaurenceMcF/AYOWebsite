$(function(){
  var log = (function(el){
    return function(text){
      el.html(el.html()+"<br />"+text);
    }
  })($(".log"))

  var hammerOptions = function(){
    return {recognizers: [
      [Hammer.Pan, {threshold:5, pointers:0}],
      [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
      [Hammer.Tap]
    ]};
  }
  $(".page").each(function(){$(this).hammer(hammerOptions())});

  var pages = $.map($(".page").toArray(), function(obj){ return $(obj)});
  console.log(pages);
  $.each(pages, function(index, obj){
    obj
      .offset({left:$(window).width()})
      .width($(window).width());
  });

  var curPageIndex  = 0;
  pages[curPageIndex].offset({left:0});

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
    showNext: function(page) {
      console.log("next");
      Actions.showPage(pages[page - 1], pages[page], false);
      curPageIndex = page;
    },
    showCurrentFromNext: function() {
      Actions.showPage(pages[curPageIndex], pages[curPageIndex + 1], true);
    },
    showCurrentFromPrev: function() {
      Actions.showPage(pages[curPageIndex], pages[curPageIndex - 1], false);
    },
    showPrev: function(page){
      console.log("prev");
      Actions.showPage(pages[page], pages[page+1], true);
      curPageIndex = page;
    },
    pan: function(e){
      //TODO: FIX width this: g.deltaX <= $(window).width() to limit errors
      //TODO: Fix not going all the way to end on first/ last
      var dx = e.gesture.deltaX;
      var width = $(window).width();
      if(dx <= 0 && curPageIndex < pages.length){
        if(curPageIndex > 0) pages[curPageIndex-1].offset({left: 0-width });
        pages[curPageIndex].offset({left: dx});
        pages[curPageIndex+1].offset({left: width + dx});
      }else if(dx > 0 && curPageIndex > 0){
        pages[curPageIndex-1].offset({left: dx - width});
        pages[curPageIndex].offset({left: dx});
        if(curPageIndex < pages.length) pages[curPageIndex+1].offset({left: width});
      }
    },
    panEnd: function(e, page){
      //TODO: Additional setting for the non visible el and checking reset can be done
      //TODO: Stop duplicating show with the swipe commands
      var dx = e.gesture.deltaX;
      var width = $(window).width();
      var w2 = width/2;
      var adx = Math.abs(dx);
      if(adx > w2){
        if(dx > 0){
          Actions.showPrev(page-1);
        }else{
          Actions.showNext(page+1);
        }
      }else{
        if(dx > 0){
          Actions.showCurrentFromPrev();
        }else{
          Actions.showCurrentFromNext();
        }
      }
    },
  }

  $.each(pages, function(index, obj){
    //if(index < 1){
    obj
    .bind("panstart panmove", Actions.pan)
    .bind("swipeleft", function(){console.log("sl"+index);Actions.showNext(index+1)})
    .bind("swiperight", function(){console.log("sr"+index);Actions.showPrev(index-1)})
    .bind("panend", function(e){console.log("pe"+index);Actions.panEnd(e, index)});
    //}
  });


  /*pages[curPageIndex]
    .bind("panstart panmove", Actions.pan)
    .bind("swipeleft", function(){Actions.showNext(0+1)})
    .bind("swipeprev", function(){Actions.showPrev(0-1)})
    .bind("panend", function(e){Actions.panEnd(e, 0)});*/

  /*page2
    .bind("panstart panmove", Actions.panNext)
    .bind("swiperight", function(){Actions.showPage(page1, page2, true)})
    .bind("panend", Actions.panNextEnd)*/


})






























//
