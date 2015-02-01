var mui = (function(mui){

  mui.log = (function(el){
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

  var PageManager = {
    pages: [],
    scrolling: false,
    init: function(filter){
      $(filter).each(function(){$(this).hammer(hammerOptions())});
      PageManager.pages = $.map($(".page").toArray(), function(obj){ return $(obj)});
      $.each(PageManager.pages, function(index, obj){
        obj.offset({left:$(window).width()}).width($(window).width());

        obj
        .bind("panmove", function(e){
          PageManager.pan(e, index);
        })
        .bind("panstart", function(e){
          console.log("ps"+index);
          console.log(e);
          console.log(Math.abs(e.gesture.deltaX) < Math.abs(e.gesture.deltaY));
          if(Math.abs(e.gesture.deltaX) < Math.abs(e.gesture.deltaY)){
            PageManager.scrolling = true;
          }
          PageManager.pan(e, index);
        })
        .bind("swipeleft", function(){console.log("sl"+index);PageManager.showPage(index+1, index)})
        .bind("swiperight", function(){console.log("sr"+index);PageManager.showPage(index-1, index)})
        .bind("panend", function(e){console.log("pe"+index);PageManager.panEnd(e, index)});

      });
      PageManager.pages[0].offset({left:0});
    },
    gotoPage: function(page){
      SideBar.hidePanel();
      if(page < 0 || page >= PageManager.pages.length){
        return;
      }
      for(var i = 0; i < PageManager.pages.length; i++){
        if(PageManager.pages[i].offset().left == 0){
          PageManager.showPage(page, i);
        }
      }
    },
    showPage: function(pageToSee, pageDuringTrans, pageToReset){
      var width = $(window).width();

      if(pageToSee < pageDuringTrans && pageToSee >= 0){
        PageManager.pages[pageToSee].animate({left: 0}, 100);
        PageManager.pages[pageDuringTrans].animate({left: width}, 100);
      }else if(pageToSee > pageDuringTrans && pageToSee < PageManager.pages.length){
        PageManager.pages[pageToSee].animate({left: 0}, 100);
        PageManager.pages[pageDuringTrans].animate({left: 0-width}, 100);
      }
      curPageIndex = pageToSee;

      if(pageToReset != undefined && pageToReset > 0 && pageToReset < PageManager.pages.length){
        if(pageToReset < pageToSee){
          PageManager.pages[pageToReset].offset({left: 0-width });
        }else if(pageToReset > pageToSee){
          PageManager.pages[pageToReset].offset({left: width });
        }
      }

      PageManager.scrolling = false;
    },
    pan: function(e, page){
      console.log("Scrolling: "+PageManager.scrolling)
      var dx = e.gesture.deltaX;
      var width = $(window).width();
      dx = (dx > width ? width : (dx < 0-width ? 0-width : dx));

      if(dx < 0 && page < PageManager.pages.length -1 && !PageManager.scrolling){
        if(page > 0) PageManager.pages[page-1].offset({left: 0-width });
        PageManager.pages[page].offset({left: dx});
        PageManager.pages[page+1].offset({left: width + dx});
      }else if(dx > 0 && page > 0 && !PageManager.scrolling){
        if(page < PageManager.pages.length - 1) PageManager.pages[page+1].offset({left: width });
        PageManager.pages[page].offset({left: dx});
        PageManager.pages[page-1].offset({left: dx - width});
      }

    },
    panEnd: function(e, page){
      //TODO: Stop duplicating show with the swipe commands
      var dx = e.gesture.deltaX;
      var width = $(window).width();
      var w2 = width/2;
      var adx = Math.abs(dx);
      if(adx > w2 && !PageManager.scrolling){
        if(dx > 0){
          PageManager.showPage(page-1, page, page+1);
        }else{
          PageManager.showPage(page+1, page, page-1);
        }
      }else if(!PageManager.scrolling){
        if(dx > 0){
          PageManager.showPage(page, page-1, page+1);
        }else{
          PageManager.showPage(page, page+1, page+1);
        }
      }
      PageManager.scrolling = false;
    },
  }


  mui.PageManagerInit = PageManager.init;
  mui.PageManagerGotoPage = PageManager.gotoPage;

  /*PageManager.init(".page", function(obj){
    obj.offset({left:$(window).width()}).width($(window).width());
  }, function(obj){
    obj.offset({left:0});
  });

  $("#gotoPage3").click(function(){
    PageManager.gotoPage(2);
  });*/


  var SideBar = {
    panel: {},
    cover: {},
    init: function(panel, cover){
      SideBar.panel = panel;
      SideBar.cover = cover;
      SideBar.panel.hammer(hammerOptions());
      SideBar.cover.hammer(hammerOptions());
      SideBar.bindPanel();
    },
    showPanel: function() {
      SideBar.panel.animate({left: 0}, 100);
      SideBar.cover.show();
      SideBar.cover.animate({opacity: 0.4}, 100);
    },
    hidePanel: function() {
      SideBar.cover.animate({opacity: 0}, 100, function(){
        SideBar.cover.hide();
      });
      SideBar.panel.animate({left: 0-SideBar.panel.width()}, 100);
    },
    bindPanel: function(){
      SideBar.panel
        .bind("panstart panmove", SideBar.panPanel)
        .bind("swiperight", SideBar.hidePanel)
        .bind("panend", SideBar.panPanelEnd);
      SideBar.cover
        .bind("panstart panmove", SideBar.panPanel)
        .bind("swiperight", SideBar.hidePanel)
        .bind("panend", SideBar.panPanelEnd)
        .bind("click", SideBar.hidePanel);
    },
    hidePartPanel: function(value){
      SideBar.panel.offset({left:value});
      var op = (value+300)*0.0013;
      SideBar.cover.show().css({"opacity": op});
    },
    panPanel: function(e){
      var g = e.gesture;
      if(g.deltaX <= 0 && g.deltaX <= SideBar.panel.width()){
        SideBar.hidePartPanel(g.deltaX);
      }else if(g.deltaX > 0){
        SideBar.hidePartPanel(0);
      }
    },
    panPanelEnd: function(e){
      var g = e.gesture;
      if(g.deltaX >= -100) {
        SideBar.showPanel();
      }else if(g.deltaX < -100) {
        SideBar.hidePanel();
      }
    },

  }

  //SideBar.init($("#sidepanel"), $("#sidepanelcover"));

  //$(".showsidepanel").click(function(){
  //  SideBar.showPanel();
  //});

  mui.SideBarInit = SideBar.init;
  mui.SideBarShow = SideBar.showPanel;




  return mui;
})(mui || {});






$(function(){

  mui.PageManagerInit(".page");

  $("#gotoPage3").click(function(){
    mui.PageManagerGotoPage(2);
  });

  mui.SideBarInit($("#sidepanel"), $("#sidepanelcover"));

  $(".showsidepanel").click(function(){
    mui.SideBarShow();
  });

  $(".docenter").offset({
    //left: ($(window).width() - $(".docenter").width())/2,
    top: ($(window).height() - $(".docenter").height())/2,
  })/*.click(function(){
    $(".docenter").animate({
      top:20,
      fontSize:"2em",
    }, 200)
  });*/


});



















//
