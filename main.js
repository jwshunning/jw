$(document).ready(function(){

	$(window).on("scroll", function(){

			if(isInView(".profile")){
				$(".photo").addClass("fixed");

			} 
			// if(isInView(p4)){
			// 	$("#sidebar2, .content").addClass("active");
			// 	$("#sidebar1").removeClass("active");
			// }
	});
});
