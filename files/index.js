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
    showPage: function(pageToSee, pageDuringTrans, pageToReset){
      var width = $(window).width();

      if(pageToSee < pageDuringTrans && pageToSee >= 0){
        pages[pageToSee].animate({left: 0}, 100);
        pages[pageDuringTrans].animate({left: width}, 100);
      }else if(pageToSee > pageDuringTrans && pageToSee < pages.length){
        pages[pageToSee].animate({left: 0}, 100);
        pages[pageDuringTrans].animate({left: 0-width}, 100);
      }
      curPageIndex = pageToSee;

      if(pageToReset != undefined && pageToReset > 0 && pageToReset < pages.length){
        if(pageToReset < pageToSee){
          pages[pageToReset].offset({left: 0-width });
        }else if(pageToReset > pageToSee){
          pages[pageToReset].offset({left: width });
        }
      }
    },
    pan: function(e, page){
      var dx = e.gesture.deltaX;
      var width = $(window).width();
      dx = (dx > width ? width : (dx < 0-width ? 0-width : dx));

      if(dx < 0 && page < pages.length -1){
        if(page > 0) pages[page-1].offset({left: 0-width });
        pages[page].offset({left: dx});
        pages[page+1].offset({left: width + dx});
      }else if(dx > 0 && page > 0){
        if(page < pages.length - 1) pages[page+1].offset({left: width });
        pages[page].offset({left: dx});
        pages[page-1].offset({left: dx - width});
      }

    },
    panEnd: function(e, page){
      //TODO: Stop duplicating show with the swipe commands
      var dx = e.gesture.deltaX;
      var width = $(window).width();
      var w2 = width/2;
      var adx = Math.abs(dx);
      if(adx > w2){
        if(dx > 0){
          Actions.showPage(page-1, page, page+1);
        }else{
          Actions.showPage(page+1, page, page-1);
        }
      }else{
        if(dx > 0){
          Actions.showPage(page, page-1, page+1);
        }else{
          Actions.showPage(page, page+1, page+1);
        }
      }
    },
  }

  $.each(pages, function(index, obj){
    obj
    .bind("panstart panmove", function(e){Actions.pan(e, index)})
    .bind("swipeleft", function(){console.log("sl"+index);Actions.showPage(index+1, index)})
    .bind("swiperight", function(){console.log("sr"+index);Actions.showPage(index-1, index)})
    .bind("panend", function(e){console.log("pe"+index);Actions.panEnd(e, index)});
  });

})






























//
