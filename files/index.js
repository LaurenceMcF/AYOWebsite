function hideSidePanel(e){
  e = e ? e : {percentage:1, completed:true};
  if(e.completed){
    $("#sidepanel").css("transition", "all .3s");
    $("#sidepanelcover").css("transition", "all .3s");
    setTimeout(function(){$("#sidepanelcover").hide()}, 300);
  }else{
    $("#sidepanel").css("transition", "0");
    $("#sidepanelcover").css("transition", "0");
  }

  $("#sidepanel").css("left", 0 - e.percentage*$("#sidepanel").width());
  $("#sidepanelcover").show().css("opacity", (1-e.percentage)*0.4);
}

$(".showsidepanel").click(function(){
  $("#sidepanel").css("transition", "all .3s");
  $("#sidepanelcover").css("transition", "all .3s");

  $("#sidepanel").css("left", 0);
  $("#sidepanelcover").show().css("opacity", 0.4);
});

$("#sidepanelcover").click(function(){hideSidePanel()});
$("#sidepanelcover").on("swipeleft", hideSidePanel);
$("#sidepanel").on("swipeleft", hideSidePanel);


$(".docenter").offset({top: ($(window).height() - $(".docenter").height())/2,});

$(".page").width($(window).width());
$(".page").css("left", $(window).width());
$(".page:first").css("left", 0);


$(".page").filter(":not(:first)").on("swiperight", function(e){
  console.log(e.dx+" "+e.completed+" "+e.percentage);
  if(e.completed){
    $(this).css("transition", "all .3s");
    $(this).prev().css("transition", "all .3s");
  }else{
    $(this).css("transition", "0");
    $(this).prev().css("transition", "0");
  }
  $(this).css("left", e.percentage*$(window).width());
  $(this).prev().css("left", (e.percentage*$(window).width() -  $(window).width()));
});
$(".page").filter(":not(:last)").on("swipeleft", function(e){
  console.log(e.dx+" "+e.completed+" "+e.percentage);
  if(e.completed){
    $(this).css("transition", "all .3s");
    $(this).next().css("transition", "all .3s");
  }else{
    $(this).css("transition", "0");
    $(this).next().css("transition", "0");
  }
  $(this).css("left", 0-(e.percentage*$(window).width()));
  $(this).next().css("left", $(window).width()-(e.percentage*$(window).width()));
});
