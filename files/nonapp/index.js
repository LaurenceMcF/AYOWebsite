$(function(){

  //Set height of hero to window height
  var height = Math.max(500,$(window).height());
  $("#hero").css("height", height);

  //Set rays size (depending on height of window)
  $(".rays")
    .css("height", height*2)
    .css("width", height*2)
    .css("bottom", 0-height)
    .css("margin-left", 0-height);

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

  //History
  var history = [
    {image:"historyphotos/destiny.jpg",    title:"Destiny",    description:"September-October 2014</em><br /><br />    Verdi La forza del destino (Overture)<br />    Bruch Violin Concerto No. 1<br />    Beethoven Symphony No. 5 <br /><br />    <em>Antun Poljanich, Jim Wu<br />    Howick, Massey, Whitianga, Auckland</em>"},    {image:"historyphotos/heartstrings.jpg",    title:"Heartstrings",    description:"<em>July-August 2014</em><br /><br />    Dvo&#345;&aacute;k Carnival Overture<br />    Schumann Cello Concerto<br />    Sibelius Symphony No. 1 <br /><br />    <em>Antun Poljanich, Edward King<br />    Taupo, Morrinsville, Whangaparaoa, Auckland</em>"},    {image:"historyphotos/folklore.jpg",    title:"Folklore",    description:"<em>April-May 2014</em><br /><br />    Brahms Hungarian Dances<br />    Ligeti Concert Rom&acirc;nesc<br />    Bartok Hungarian Sketches<br />    Bartok Viola Concerto<br />    Kod&aacute;ly Dances of Gal&aacute;nta<br /><br />    <em>Antun Poljanich, Alex McFarlane<br />    Auckland, Dargaville, Whangarei, Whangaparaoa</em>"},    {image:"historyphotos/titan.jpg",    title:"TITAN",    description:"<em>October 2013</em><br /><br />    Thomas Press crashing through a bright mist<br />    Mahler Symphony No. 1 'Titan'<br /><br />    <em>Antun Poljanich<br />    Auckland</em>"},    {image:"historyphotos/tot.jpg",    title:"Tchaikovsky on Tour",    description:"<em>June-July 2013</em><br /><br />    Rimsky-Korsakov Capriccio Espagnole<br />    Monti Cs&aacute;rd&aacute;s<br />    Saint-Sa&euml;ns Havanaise<br />    Tchaikovsky Symphony No. 4<br /><br />    <em>Antun Poljanich, Laurence McFarlane, Richard Chen<br />    Auckland, Gore, Te Anau, Westport</em>"},    {image:"historyphotos/lifehero.jpg",    title:"Life of a Hero",    description:"<em>April-May 2013</em><br /><br />    Hindemith Trauermusik<br />    Mahler Todtenfeier<br />    Beethoven Violin Concerto<br /><br />    <em>Antun Poljanich, Olivia Francis<br />    Auckland, Whangarei, Whitianga</em>"},    {image:"historyphotos/russialove.jpg",    title:"From Russia With Love (An Orchestral Celebration)",    description:"<em>September-October 2012</em><br /><br />    Mozart Marriage of Figaro Overture<br />    Robbie Ellis In meinem letzten Leiden<br />    Guilmant Symphony No. 1 for Organ and Orchestra in D minor (Auckland only)<br />    Shostakovich Symphony No. 9<br /><br />    <em>Birkenhead, Whangarei, Helensville, Auckland</em>"},    {image:"historyphotos/beethoven9.jpg",    title:"Beethoven 9",    description:"<em>July 2012</em><br /><br />    Beethoven Symphony No. 9<br /><br />    <em>Antun Poljanich, Isabella Moore, Anthony Schneider, Elisha Fa'i-Hulton, Amitai Pati<br />    Auckland, Papakura, Tauranga, Taupo, Whangarei, Whitianga</em>"},    {image:"historyphotos/fantasy.jpg",    title:"Fantasy",    description:"<em>March/April 2012</em><br /><br />    Rimsky-Korsakov Scheherazade <br />    Vaughan-Williams Fantasia on a Theme by Thomas Tallis <br />    Mozart Bassoon Concerto<br /><br />    <em>Antun Poljanich, Albee Ai<br />    Auckland, Whangarei, Warkworth, Helensville</em>"},    {image:"historyphotos/masterclef.jpg",    title:"MasterClef",    description:"<em>October 2011</em><br /><br />    Elgar Serenade for Strings<br />    Weber Clarinet Concerto No. 2<br />    Beethoven Symphony No. 4<br /><br />    <em>Antun Poljanich, Natalie Harris<br />    Auckland, Warkworth, Thames, Whangarei</em>"},    {image:"historyphotos/europa.jpg",    title:"Europa / AYO European Tour",    description:"<em>July-August 2011</em><br /><br />    Mendelssohn Hebrides Overture<br />    Strauss Oboe Concerto<br />    Alex Taylor between<br />    Poulenc Sinfonietta    <br /><br />    <em>Antun Poljanich, Thomas Hutchinson<br />    Howick, Helensville, Whangarei, Auckland<br />    Germany, Austria, Slovenia</em>"},    {image:"historyphotos/nyny.jpg",    title:"New York, New York",    description:"<em>May 2011</em><br /><br />    <em>Antun Poljanich, Tim Beveridge, Natalie Harris<br />    Auckland, Kerikeri, Orewa</em>"},    {image:"historyphotos/inlux.jpg",    title:"In Lux Aeterna / In Eternal Light",    description:"<em>March-April 2011</em><br /><br />    Part Cantus in Memory of Benjamin Britten<br />    Mozart Piano Concerto No. 23 in A major<br />    Tchaikovsky Symphony No. 5 in e minor<br /><br />    <em>Antun Poljanich, Jane Sohn<br />    Auckland, Helensville, Hamilton, Whitianga</em>"},    {image:"historyphotos/ussr.jpg",    title:"Back to the USSR",    description:"<em>September-October 2010</em><br /><br />    Khachaturian Gayane Suite<br />    Prokofiev Piano Concerto No. 1<br />    Shostakovich Symphony No. 5<br /><br />    <em>Antun Poljanich, Jason Bae<br />    Auckland, Tauranga, Hamilton, Whangarei, Warkworth</em>"},    {image:"historyphotos/yourmajesty.jpg",    title:"Your Majesty",    description:"<em>June-July 2010</em><br /><br />    Mandeno Phantasmagoria<br />    Bruch Violin Concerto No. 1<br />    Mozart Clarinet Concerto<br />    Elgar Enigma Variations<br /><br />    <em>Peter Thomas, Richard Chen, Rowan Meade<br />    Auckland, Katikati, Cambridge</em>"},    {image:"historyphotos/meetigor.jpg",    title:"Meet Igor",    description:"<em>February-March 2010</em><br /><br />    Albinoni Oboe Concerto<br />    Mandeno Typhon<br />    Stravinsky Arioso, Ebony Concerto, Suites for Small Orchestra, Pulcinella Suite<br /><br />    <em>Antun Poljanich, Thomas Hutchinson<br />    Auckland, Orewa, New Lynn</em>"},    {image:"historyphotos/fireice.jpg",    title:"Fire and Ice",    description:"<em>October-November 2009</em><br /><br />    Glinka Ruslan & Ludmilla Overture<br />    Allen Fantasia<br />    Tchaikovsky Romeo & Juliet Overture<br />    Sibelius Symphony No. 3<br /><br />    <em>Antun Poljanich, Thomas Hutchinson<br />    Auckland, Orewa, New Lynn</em>"},    {image:"historyphotos/diamondjubilee.jpg",    title:"Diamond Jubilee Concert",    description:"<em>August-October 2008</em><br /><br />    J Strauss Die Fledermaus Overture<br />    Cowan Legend of the Trojan Bird<br />    Ravel Piano Concerto in g minor<br />    Tchaikovsky Symphony No. 6<br /><br />    <em>Antun Poljanich, John-Paul Muir<br />    Los Angeles, New York, Rhode Island, Boston, Auckland</em>"},    {image:"historyphotos/symphonicheroes.jpg",    title:"Symphonic Heroes",    description:"<em>March-April 2008</em><br /><br />    Berlioz Roman Carnival Overture<br />    Aratunian Trumpet Concerto<br />    Beethoven Symphony No. 7<br /><br />    <em>Antun Poljanich, Bill Stoneham<br />    Auckland, Warkworth, Orewa, Thames</em>"},    {image:"historyphotos/kingdom.jpg",    title:"Kingdom of the Animals",    description:"<em>April 2008</em><br /><br />    Prokofiev Peter and the Wolf <br />    Saint-Saens Carnival of the Animals <br />    Rimsky Korsakov Flight of the Bumble Bee<br />    Tchaikovsky Prelude to Swan Lake <br />    Mussorgsky Chicks in their shells (from Pictures at an Exhibition)<br />    Alex Taylor Noughts and Crosses <br /><br />    <em>Antun Poljanich, Jason Bae, Joong-Han Jung<br />    Warkworth, Auckland</em>"},  ];
  $('#historyBox').galleria({
      data_source: history,
      width:900,
      height:500
  });
  $(".showHistory").click(function(e){
    var close = function(){
        $(".popupBacking").hide();
        $(".historypopup").hide();
      };
      $(".popupBacking").show().click(close);
    $(".historypopup").show();
  });



});
