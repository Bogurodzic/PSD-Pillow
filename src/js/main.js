$(document).ready(function(){

	$(".fa-bars").on("click", function(){
		$(".header-menu ul").stop().toggle("slide", { direction: "right" });
	});


//Slider 

	 $('.bxslider').bxSlider({
	    nextSelector: '#slider-next',
	 	prevSelector: '#slider-prev',
	  	nextText: "<img src='img/arrow-right.png'>",
	 	prevText: "<img src='img/arrow-left.png'>",
		pager: false
	  });


//Form

	$(".fa-plus").click(function() {
	  	$( "form" ).submit();
	});

//Stars	

	$(".fa-star").mouseenter(function(){
		$(this).prevAll().css("color", "#fbaf5d");
		$(this).css("color", "#fbaf5d");
	});

	$(".fa-star").mouseout(function(){
		$(this).prevAll().css("color", "");
		$(this).css("color", "");
	});

});