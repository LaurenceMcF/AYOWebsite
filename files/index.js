(function ( $ ) {

    $.fn.showswipe = function() {
      this
        //.offset({left: 0-this.width()})
        .show()
        .animate({left: 0}, 100);
      return this;
    };
    $.fn.hideswipe = function() {
      this
        .animate({left: 0-this.width()}, 100)
      return this;
    };

}( jQuery ));

$(function(){
  var logel = $(".log");
  function log(text){
    logel.text(text);
  }

  var testCounter = 0;

  var el = document.querySelector(".page");
  var sidepanel = $(".sidepanel");

  var drag = $("#scrollthing")

  var START_X = 0;
  var START_Y = 0;
  var position = {left:0, top:0};


  var mc = new Hammer.Manager(el);

  mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

  mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));

  mc.add(new Hammer.Tap());

  mc.on("panstart panmove", onPan);
  mc.on("swiperight", onSwipe);
  mc.on("panend", onPanEnd)

  //mc.on("tap", onTap);

  //$(el).on("click", onTap);

  var mcd = new Hammer.Manager(document.querySelector("#popupcover"));
  mcd.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
  mcd.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
  mcd.on("panstart panmove", onPanLeft);
  mcd.on("swipeleft", onSwipeLeft);
  mcd.on("panend", onPanEndLeft)

  function onTap(ev){
    log("Touched " + testCounter);
    testCounter++;
    console.log(el.innerText);
    console.log("Taped Main Div");
    if(visible){
      sidepanel.hide();
    }else{
      sidepanel.showswipe();
    }
    visible = !visible;
  }

  function onPan(ev) {
    /*log("Panned " + testCounter);
    testCounter++;
    console.log(ev);*/
    if(ev.deltaX >= 0 && ev.deltaX <= sidepanel.width()){
      sidepanel.show().offset({left:ev.deltaX - sidepanel.width()});
      $("#popupcover").show();
    }else if(ev.deltaX < 0){
      $("#popupcover").hide();
    }
  }

  function onPanLeft(ev) {
    if(ev.deltaX <= 0 && ev.deltaX <= sidepanel.width()){
      sidepanel.show().offset({left:ev.deltaX });
      $("#popupcover").hide();
    }else if(ev.deltaX > 0){
      $("#popupcover").show();
    }
  }


  function onSwipe(ev){
    sidepanel.showswipe();
  }

  function onSwipeLeft(ev){
    sidepanel.hideswipe();
    $("#popupcover").hide();
  }

  function onPanEnd(ev) {
    if(ev.isFinal && ev.deltaX >= 100) {
      sidepanel.showswipe();
    }else if(ev.isFinal && ev.deltaX < 100) {
      sidepanel.hideswipe();
      $("#popupcover").hide();
    }
  };

  function onPanEndLeft(ev) {
    if(ev.isFinal && ev.deltaX >= -100) {
      sidepanel.showswipe();
      $("#popupcover").show();
    }else if(ev.isFinal && ev.deltaX < -100) {
      sidepanel.hideswipe();
      $("#popupcover").hide();
    }
  };

  $(".showmenu").on("click", function(){
    sidepanel.showswipe();
    $("#popupcover").show();
  });

  $("#popupcover").click(function(){
    sidepanel.hideswipe();
    $("#popupcover").hide();
  });

});













































//
