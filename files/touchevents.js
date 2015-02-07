//https://github.com/benmajor/jQuery-Touch-Events/blob/master/src/jquery.mobile-events.js

(function($){

  console.log("sdf");

  $.event.special.swipe = {
    setup: function(){
      console.log("dfgkdslgjsdlfj");
      var $el = $(this);

      var originalCoord = {
            x: 0,
            y: 0
        },
        finalCoord = {
            x: 0,
            y: 0
        },
        dir = 0; //0=undefined 1=left, 2=right

      function touchStart(e){
        originalCoord.x = e.originalEvent.targetTouches[0].pageX;
        originalCoord.y = e.originalEvent.targetTouches[0].pageY;
        finalCoord.x = originalCoord.x;
        finalCoord.y = originalCoord.y;
      }

      function touchMove(e){
        finalCoord.x = e.originalEvent.targetTouches[0].pageX;
        finalCoord.y = e.originalEvent.targetTouches[0].pageY;
        var xAmount = Math.abs(originalCoord.x - finalCoord.x),
          yAmount = Math.abs(originalCoord.y - finalCoord.y);
        var xPercent = xAmount / $(window).width();

        if(finalCoord.x < originalCoord.x){
          if(dir == 0){
            dir = 1;
          }else if(dir == 2){
            $el.trigger({
              type: "swiperight",
              dx: 0,
              completed: false,
              percentage: 0,
            });
          }
          $el.trigger({
            type: "swipeleft",
            dx: xAmount,
            completed: false,
            percentage: xPercent,
          });
        }else{
          if(dir == 0){
            dir = 2;
          }else if(dir == 1){
            $el.trigger({
              type: "swipeleft",
              dx: 0,
              completed: false,
              percentage: 0,
            });
          }
          $el.trigger({
            type: "swiperight",
            dx: xAmount,
            completed: false,
            percentage: xPercent,
          });
        }
        $el.trigger({
          type: "swipe",
          dx: xAmount,
          completed: false,
          percentage: xPercent,
        });
      }

      function touchEnd(e){
        finalCoord.x = e.originalEvent.changedTouches[0].pageX;
        finalCoord.y = e.originalEvent.changedTouches[0].pageY;
        var xAmount = Math.abs(originalCoord.x - finalCoord.x),
          yAmount = Math.abs(originalCoord.y - finalCoord.y);
        var xPercent = xAmount / $(window).width();
        var dirtext = dir == 1 ? "left" : (dir == 2 ? "right" : "");
        var finalper = xAmount > $(window).width()/2 ? 1 : 0;
        $el.trigger({
          type: "swipe" + dirtext,
          completed: true,
          percentage: finalper,
        });
      }

      $el.on('touchstart', touchStart);
      $el.on('touchmove', touchMove);
      $el.on('touchend', touchEnd);
    },
  }


})(jQuery)
