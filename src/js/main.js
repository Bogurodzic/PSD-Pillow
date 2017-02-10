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

	 var slider = $('.bxslider1').bxSlider({
	    nextSelector: '#slider-next-blog',
	 	prevSelector: '#slider-prev-blog',
	  	nextText: "<img src='img/arrow-right.png'>",
	 	prevText: "<img src='img/arrow-left.png'>",	 
	    pagerCustom: '#bx-pager'	
	 });

	 $('a.pager-prev').click(function () {
	    var current = slider.getCurrentSlide();
	    slider.goToPrevSlide(current) - 1;
	});

	$('a.pager-next').click(function () {
	    var current = slider.getCurrentSlide();
	    slider.goToNextSlide(current) + 1;
	});

	 //$(".diamonds").on("click", function(){
	 //	$(".diamonds").css("color", "black");
	 //	$(this).css("color", "red");
	 //});

//Form

	$(".fa-plus").click(function() {
	  	$( "form" ).submit();
	});  

//Stars	
/*
	$(".fa-star::before").on("click", function(){
		clearStars($(this));
		yellowStar($(this));
	});

	$(".fa-star").hover(function(){

	})


function yellowStar(star){
	$(star).prevAll().css({
		"color": "#fbaf5d"
	});
	$(star).css({
		"color": "#fbaf5d"
	});
}

function clearStars(star){
	$(star).prevAll().css({
		"color": "#b0b0b0"
	});
	$(star).css({
		"color": "#b0b0b0"
	});	
	$(star).nextAll().css({
		"color": "#b0b0b0"
	});
}*/

});

