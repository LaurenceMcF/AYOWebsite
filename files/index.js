$(function(){
  var log = (function(el){
    return function(text){
      el.html(el.html()+"<br />"+text);
    }
  })($(".log"))

  var page = $(".page");
  var sidepanel = $("#sidepanel");
  var sidepanelcover = $("#sidepanelcover");

  var hammerOptions = function(){
    return {recognizers: [
      [Hammer.Pan, {threshold:5, pointers:0}],
      [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
      [Hammer.Tap]
    ]};
  }
  page.hammer(hammerOptions());
  sidepanel.hammer(hammerOptions());
  sidepanelcover.hammer(hammerOptions());

  var Actions = {
    showPanel: function() {
      sidepanel.animate({left: 0}, 100);
      sidepanelcover.show();
      sidepanelcover.animate({opacity: 0.4}, 100, function(){
        Actions.bindPanel();
      });
    },
    hidePanel: function() {
      Actions.unbindPanel();
      sidepanelcover.animate({opacity: 0}, 100, function(){
        sidepanelcover.hide();
      });
      sidepanel.animate({left: 0-sidepanel.width()}, 100);
    },
    bindPanel: function(){
      sidepanel
        .bind("panstart panmove", Actions.panPanel)
        .bind("swiperight", Actions.hidePanel)
        .bind("panend", Actions.panPanelEnd);
      sidepanelcover
        .bind("panstart panmove", Actions.panPanel)
        .bind("swiperight", Actions.hidePanel)
        .bind("panend", Actions.panPanelEnd)
        .bind("click", Actions.hidePanel);
    },
    unbindPanel: function(){
      sidepanel
        .unbind("panstart panmove", Actions.panPanel)
        .unbind("swipeleft", Actions.hidePanel)
        .unbind("panend", Actions.panPanelEnd);
      sidepanelcover
        .unbind("panstart panmove", Actions.panPanel)
        .unbind("swipeleft", Actions.hidePanel)
        .unbind("panend", Actions.panPanelEnd)
        .unbind("click", Actions.hidePanel);
    },
    showPartPanel: function(value){
      sidepanel.offset({left:value - sidepanel.width()});
      var op = value*0.0013; //(OR value * (0.4/300))
      sidepanelcover.show().css({"opacity": op});
    },
    hidePartPanel: function(value){
      sidepanel.offset({left:value});
      var op = (value+300)*0.0013;
      sidepanelcover.show().css({"opacity": op});
    },
    panBase: function(e){
      var g = e.gesture;
      if(g.deltaX >= 0 && g.deltaX <= sidepanel.width()){
        Actions.showPartPanel(g.deltaX);
      }else if(g.deltaX < 0){
        Actions.showPartPanel(0);
      }
    },
    panBaseEnd: function(e){
      var g = e.gesture;
      if(g.deltaX >= 100) {
        Actions.showPanel();
      }else if(g.deltaX < 100) {
        Actions.hidePanel();
      }
    },
    panPanel: function(e){
      var g = e.gesture;
      if(g.deltaX <= 0 && g.deltaX <= sidepanel.width()){
        Actions.hidePartPanel(g.deltaX);
      }else if(g.deltaX > 0){
        Actions.hidePartPanel(0);
      }
    },
    panPanelEnd: function(e){
      var g = e.gesture;
      if(g.deltaX >= -100) {
        Actions.showPanel();
      }else if(g.deltaX < -100) {
        Actions.hidePanel();
      }
    },

  }

  page
    .bind("panstart panmove", Actions.panBase)
    .bind("swiperight", Actions.showPanel)
    .bind("panend", Actions.panBaseEnd);

  $(".showmenu").bind("click", Actions.showPanel);





})

































//
