$(function(){

  //Set height of hero to window height
  $("#hero").css("height", $(window).height());
  var height = $(window).height();

  //Set rays size (depending on height of window)
  $(".rays")
    .css("height", $(window).height()*2)
    .css("width", $(window).height()*2)
    .css("bottom", 0-$(window).height())
    .css("margin-left", 0-$(window).height());

  //Fixed top menu
  $(window).scroll(function () {
      if ($(window).scrollTop() > height) {
          $('.fixedtop').addClass('fixed');
      } else {
          $('.fixedtop').removeClass('fixed');
      }
  });
  $(".fixedtop ul li").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("data-goto")).offset().top - $(".fixedtop").height()
    }, 100)
  });


  //Programme menu
  $(".programme li .head").click(function(e){
    var el = $(this).parent();
    if(el.hasClass("reveal")){
      el.removeClass("reveal");
      el.children(".detailscontainer").css({
        "height": 0,
      });
    }else{
      el.addClass("reveal");
      el.children(".detailscontainer").css({
        "height": el.children(".detailscontainer").children(".details").outerHeight(),
      });
    }
  });

  //Orchestra popups
  $(".orchestra ul li").not(".instrument").click(function(e){
    var close = function(){
      $(".popupBacking").hide();
      $(".orchpopup").hide();
    };
    $(".popupBacking").show().click(close);
    var popup = $(".orchpopup");
    var name = $(this).html();
    popup.css("left", ($(window).width() - popup.width())/2)
    popup.children(".orchpopupname").html(name);
    popup.children(".orchpopupclose").click(close);
    popup.children(".orchpopuptext").html(people[name]['text']);
    popup.children(".orchpopupimg").attr("src", people[name]['image']);
    popup.show();
  })

  var people = {
    "harris":{
      image:"rays.svg", text:"sdkjfgsdkfjhsdfjhsdkfjhalkjhafds"
    },
    "Harris":{
      image:"Cloud01.svg", text:"tiyouiyoyuio"
    }
  }

  //Gallery
  var gallery = [
      {
          video: 'http://www.youtube.com/watch?v=gDnyn4rchgc',
      },
    {
          image: 'galleryphotos/23.JPG',
          title: 'Woodwind and Brasswind',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/28.JPG',
          title: 'Pizzicato cellos',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/37.JPG',
          title: 'Violas',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/42.JPG',
          title: 'Three Trumpeteers',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/50.JPG',
          title: 'Three Trumpeteers',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/54.JPG',
          title: 'In Rehearsal',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/59.JPG',
          title: 'Percussionists at work',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/61.JPG',
          title: 'Happy basses!',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/72.JPG',
          title: 'Cameron "Fastidious" Stuart',
          description: 'Auckland Town Hall',
      },
    {
          image: 'galleryphotos/92.JPG',
          title: 'Rehearsal precision',
          description: 'Auckland Town Hall',
      },
      {
          image: 'galleryphotos/IMG_2963.JPG',
          title: 'In Rehearsal',
          description: 'Dunedin Town Hall',
      },
      {
          image: 'galleryphotos/IMG_2976.JPG',
          title: 'In Concert',
          description: 'Dunedin Town Hall',
      },
      {
          image: 'galleryphotos/IMG_2986.JPG',
          title: 'First Violins',
          description: 'Gore',
      },
      {
          image: 'galleryphotos/IMG_3022.JPG',
          title: 'Czardas played by Laurence McFarlane',
          description: 'Te Anau',
      },
      {
          image: 'galleryphotos/IMG_3032.JPG',
          title: 'Enthusiastic Fans getting close up after the concert',
          description: 'Te Anau',
      },
      {
          image: 'galleryphotos/IMG_3044.JPG',
          title: 'Cooking dinner for the orchestra on tour',
          description: 'Te Anau Youth Hostel',
          },
      {
          image: 'galleryphotos/IMG_3051.JPG',
          title: 'Dinner and Games',
          description: 'Te Anau Youth Hostel',
          },

      {
          image: 'galleryphotos/IMG_3152.JPG',
          title: 'Bungy Jumping undertaken by many!',
          description: 'Queenstown',
          },

          {
          image: 'galleryphotos/IMG_3185.JPG',
          title: 'Robbie, Principal Cello, demonstrating',
          description: 'Wanaka',
          },

          {
          image: 'galleryphotos/IMG_3187.JPG',
          title: 'In Rehearsal',
          description: 'Wanaka',
          },

          {
          image: 'galleryphotos/IMG_3188.JPG',
          title: 'Almost full house',
          description: 'Wanaka',
          },
      {
          image: 'galleryphotos/IMG_3221.JPG',
          title: 'Nick, Jono, and Robbie',
          description: 'Gates of Haast',
      },
      {
          image: 'galleryphotos/IMG_3223.JPG',
          title: 'Carol and Jess',
          description: 'Gates of Haast',
      },
      {
          image: 'galleryphotos/IMG_3240.JPG',
          title: 'Made it to Fox Glacier',
          description: 'Fox Glacier',
      },
      {
          image: 'galleryphotos/IMG_3260.JPG',
          title: 'Cooking dinner',
          description: 'Noahs Arc Hostel, Greymouth',
      },
      {
          image: 'galleryphotos/IMG_3300.JPG',
          title: 'Beautiful basses',
          description: 'Westport',
      },
      {
          image: 'galleryphotos/IMG_3303.JPG',
          title: 'Photogenic Horns',
          description: 'Westport',
          },
      {
          image: 'galleryphotos/IMG_3304.JPG',
          title: 'Woodwinds, deep in concentration',
          description: 'Westport',
          },

      {
          image: 'galleryphotos/IMG_3329.JPG',
          title: 'In Concert',
          description: 'Nelson School of Music',
          },

          {
          image: 'galleryphotos/IMG_3331.JPG',
          title: 'Czardas',
          description: 'Nelson School of Music',
          },

          {
          image: 'galleryphotos/IMG_3343.JPG',
          title: 'Back home, In Rehearsal',
          description: 'Auckland Town Hall',
          },

          {
          image: 'galleryphotos/IMG_3353.JPG',
          title: 'In Concert',
          description: 'Auckland Town Hall',
          },


  ];
  $('#photoBox').galleria({
      data_source: gallery,
      width:900,
      height:500
  });
  $(".showGallery").click(function(e){
    var close = function(){
        $(".popupBacking").hide();
        $(".gallerypopup").hide();
      };
      $(".popupBacking").show().click(close);
    $(".gallerypopup").show();
  });



});
