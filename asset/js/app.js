(function($){
/*=====================================*\
	fonction affix menu sticky on top
\*=====================================*/
/* quand je scroll de 200px par rapport au document(la page du site),
* on ajoute la class "affixe" crée dans le css.
* le menu de navigation se fixe en haut de la page.
* ici on prend en compte la hauteur du "header" (environ 200px).
*/ 
	  var scrolling = function(){

	  	$(window).scroll(function(){
	 		if ($(document).scrollTop() > 200) {
	 			$(".navbar-default").addClass("affixe");
	 			$("body").addClass("marge");

	 		} else{
	 			$(".navbar-default").removeClass("affixe");
	 			$("body").removeClass("marge");
	 		}
 		});
	  };
	  scrolling();		
 	//fonction affix menu sticky on top end//

	/*ajustement media queries*/
	/*$(window).resize(function(){
	    if ($(window).width() < 768) {	
	    	
	    } else {

	   		}     
	});*/
/*=================*\
	owl-carousel
\*=================*/
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autowidth:false,
		responsiveClass:true,
		nav:true,
		navText : ["<i class='fa fa-chevron-left fa-lg'></i>","<i class='fa fa-chevron-right fa-lg'></i>"],
    	
		responsive:{
		    0:{
			    items:1,
			    nav:true,
			    loop:true,
		    },
		    768:{
			    items:1,
			    nav:true,
			    loop:true,
		    },
		    992:{
			    items:2,
			    nav:true,
			    loop:true,
		    }
		}	
	});
//owl-carousel-end//
/*=================*\
	Google Map
\*=================*/
	(function(){
	 
		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 49.178216, 
			lng: -0.380364,
			scrollwheel:false,
			zoom: 18,
			zoomControl : true,
			panControl : true,
			streetViewControl : true,
			mapTypeControl: true,
			overviewMapControl: true,
			clickable: false,
		});

		var image = 'asset/images/tn2_map-icon.png';
		map.addMarker({
			lat: 49.178216,
			lng: -0.380364,
			icon: image,
			animation: google.maps.Animation.BOUNCE,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#3e8bff',
			infoWindow: {
	  			content: '<h4>Presto Pizza</h4>'
			}
		});
	}());
})(jQuery);
