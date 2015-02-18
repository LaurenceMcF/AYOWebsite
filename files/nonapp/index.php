<?php

$pages = array(
	"/" => array("navsmart" => "Home", "location"=>"home.html"),
	"/concerts/" => array("nav"=>"Concerts", "location"=>"concerts.html", "title"=>"AYO Concerts"),
	"/aboutus/" => array("nav"=>"About Us", "location"=>"aboutus.html"),
	"/players/" => array("nav"=>"People", "location"=>"people.html"),
	"/history/" => array("nav"=>"History", "location"=>"history.html"),
	"/alumni/" => array("nav"=>"Alumni", "location"=>"alumni.html"),
	"/gallery/" => array("nav"=>"Gallery", "location"=>"gallery.html"),
	"/sponsors/" => array("nav"=>"Supporters", "location"=>"sponsors.html"),
	"/donate/" => array("nav"=>"Donate", "location"=>"donate.html"),
	"/joinus/" => array("nav"=>"Join AYO", "location"=>"joinus.html"),
	"/contact/" => array("nav"=>"Contact", "location"=>"contact.html"),
	"/scholarships/" => array("nav"=>"Scholarships", "location"=>"scholarships.html"),
	"/concerts/lifeofahero/" => array("parent"=>"/concerts/", "location"=>"concerts/lifeofahero.html"),
	"/concerts/tchaikovskyontour/" => array("parent"=>"/concerts/", "location"=>"concerts/tchaikovskyontour.html"),
	"/concerts/titan/" => array("parent"=>"/concerts/", "location"=>"concerts/titan.html"),
);

$contentURL = "";
$currentNav = "";
$title = "AYO";
$page = "";
if(isset($_SERVER["REQUEST_URI"])){
	$page = $_SERVER["REQUEST_URI"];
	$contentURL = $pages[$_SERVER["REQUEST_URI"]]["location"];
	if(isset($pages[$page]["title"])){
		$title = $pages[$page]["title"];
	}
}
if($contentURL == ""){
	$contentURL = "little404.html";
	$title = "AYO - Page not found";
}

$parentPageL = $page;
while(true){
	if(isset($pages[$parentPageL]["nav"])){
		$currentNav = $parentPageL;
	}
	if(isset($pages[$parentPageL]["parent"])){
		$parentPageL = $pages[$parentPageL]["parent"];
	}else{
		break;
	}
}

$pageContent = file_get_contents("content/". $contentURL);

?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $title; ?></title>
		<link rel="stylesheet" href="/include/style.css">
		<link rel="shortcut icon" href="/content/favicon.ico">
		<script src="/include/jquery.js"></script>
		<script src="/include/galleria/galleria-1.3.3.min.js"></script>
		<script src="/include/galleria/themes/classic/galleria.classic.min.js"></script>
		<script src="/include/script.js"></script>
	</head>
	<body>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37839530-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
		<div id="fb-root"></div>
			<script>(function(d, s, id) {
  				var js, fjs = d.getElementsByTagName(s)[0];
  				if (d.getElementById(id)) return;
  				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script>		


		<div class="makeCenter">
			<div class="heading"><a href="/"><img src="/content/ayoaucklandyouthorchestra2.png" alt="AYO - Auckland Youth Orchestra" /></a></div>
			<div class="menu">
				<ul>
					<?php  foreach($pages as $i => $value) { 
						if(isset($value["navsmart"]) && !($currentNav == "/" || $currentNav == "")){?>
							<li>
								<a href="<?php echo $i ?>">
									<?php echo $value["navsmart"] ?>
								</a>
							</li>
						<?php }
						if(isset($value["nav"])){?>
							<li>
								<a class="<?php if($i == $currentNav){echo "navHighlight";}?>" href="<?php echo $i ?>">
									<?php echo $value["nav"] ?>
								</a>
							</li>
							
					<?php } } ?>
				</ul>
			</div>
			<div id="popupGrey"></div><div id="popup"></div>
			<div class="page">
				<!--<a id="showPopup" href="javascript:void(0);">Show popup</a>-->
				<div class="block"><?php echo $pageContent; ?></div>
				
				<div class="footer"><a href="http://www.facebook.com/ayorchestra" >AYO on Facebook</a><br />&copy;2015 AYO</div>
			</div>
			
		</div>
	</body>
	
	
</html>
