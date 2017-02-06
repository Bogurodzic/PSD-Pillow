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



});