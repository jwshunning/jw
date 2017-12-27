var isInView = function (el) {
	if (typeof el == "undefined") {
		return false;
	}
	if (typeof el === "object") {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return rect.bottom > 0 &&
		rect.right > 0 &&
		rect.left < (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */ &&
		rect.top < (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ ;
};

$(document).ready(function () {

	$(window).on("scroll", function () {
		var span = $(".sticky");
		var unsticky = $(".unsticky");

		if (isInView(span)) {
			$(".photo").addClass("fixed");
		}

		if (isInView(unsticky)) {
			$(".photo").removeClass("fixed");
		}

		if (isInView($("#first"))) {
			$(".journey").addClass("sticky");
		}

		var facts = $(".topsb");
		var remfacts = $(".tsb");
		var p1 = $(".tsbtwo");

		if (isInView(facts)) {
			$(".jw-facts").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(remfacts)) {
			$(".jw-facts").removeClass("active");
		}
		if (isInView(p1)) {
			$(".jw-facts").removeClass("active");
		}
	});


	$(".name").on("click", function () {
		$(".small-bio").toggleClass("active");
	});

	$(".read").on("click", function () {
		var profile = $(this).closest(".profile"),
			bio = profile.find(".bio");
		bio.toggleClass("active");
	});

	$(".audio-container").on("click", function () {
		// $("#play").attr('src', "https://image.freepik.com/free-icon/pause-button-outline_318-40569.jpg");
		var violeta = $("#violeta")[0];
		if (violeta.paused == false) {
			violeta.pause();
		} else {
			violeta.play();
		}
		// violeta.play();

		var swapImage = $('#play').attr('data-swap'),
			currentImage = $('#play').attr('src');

		$('#play').attr({
			'src': swapImage,
			'data-swap': currentImage
		});


	});

	$(".name").on("click", function () {
		var bio = $(this).data("text"),
			age = $(this).data("age"),
			place = $(this).data("place");
		$(".mon").html(bio);
		$(".age").html(age);
		$(".place").html(place);

	});
});