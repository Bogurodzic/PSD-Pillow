$(document).ready(function(){

	$(".fa-bars").on("click", function(){
		$(".header-menu ul").stop().toggle("slide", { direction: "right" });
	});

});