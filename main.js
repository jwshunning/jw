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

	var pauseAudio = function (container) {
		var player = container.find("audio")[0];

		player.pause();
		player.currentTime = 0;
		container.data("playing", false);
	};
	var playAudio = function (container) {
		var player = container.find("audio")[0];

		player.play();
		container.data("playing", true);
	};
	$(".btn").on("click", function () {
		/* ON CLICK PAUSE ALL AUDIO PLAYBACK, UPDATE THE STATE OF THIS AUDIO AND THE CONTAINER DATA */
		var container = $(this).closest(".audio-container"),
			player = container.find("audio")[0],
			previousContainer = $(".audio-container.active");

		if (previousContainer.data("playing") && previousContainer[0] !== container[0]) {
			pauseAudio(previousContainer);
			container.currentTime = 0;
		}

		$(".audio-container.active").removeClass("active");

		container.addClass("active");

		if (container.data("playing")) {
			pauseAudio(container);
			container.currentTime = 0;
		} else {
			playAudio(container);
		}

		//swap images when audio clicked
		var pic = $(this).find(".play");
		var swapImage = pic.attr('data-swap'),
			currentImage = pic.attr('src');

		pic.attr({
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