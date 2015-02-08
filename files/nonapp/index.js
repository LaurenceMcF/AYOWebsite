$(function(){

  $("#welcomescreen").css("height", $(window).height());

  var logoEl = $("#welcomescreen .logo");
  var mdsumEl = $("#welcomescreen .midsumtext");

  var height = $(window).height();
  var width = $(window).width();

  logoEl.css("left", (width - logoEl.width())/2);
  mdsumEl.css("left", (width - mdsumEl.width())/2);
  logoEl.css("top", (height - logoEl.height())/2);
  mdsumEl.css("top", (height - mdsumEl.height()));

  logoEl.css("transition", "all 1s");
  mdsumEl.css("transition", "all 1s");

  logoEl.css("top", 20);
  mdsumEl.css("top", (height - mdsumEl.height())/2);

  //var boxEl = $("#welcomescreen .boxContainer");
  //boxEl.css("left", width/4);


});

//Old width:14.79046059;
