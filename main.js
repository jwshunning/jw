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

		var beth = $(".sb1");
		var nbeth = $(".nsb1");
		var nbeth2 = $(".nsb2");

		if (isInView(nbeth)) {
			$("#fact1").removeClass("active");
		}
		if (isInView(beth)) {
			$("#fact1").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nbeth2)) {
			$("#fact1").removeClass("active");
		}

		var arm = $(".sb2"),
			noarm = $(".noarm"),
			noarm2 = $(".noarm2");

		if (isInView(noarm)) {
			$("#fact2").removeClass("active");
		}
		if (isInView(arm)) {
			$("#fact2").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(noarm2)) {
			$("#fact2").removeClass("active");
		}

		var jeh = $(".sb3"),
			nojeh = $(".nojeh"),
			nojeh2 = $(".nojeh2");

		if (isInView(nojeh)) {
			$("#fact3").removeClass("active");
		}
		if (isInView(jeh)) {
			$("#fact3").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nojeh2)) {
			$("#fact3").removeClass("active");
		}

		var tru = $(".sb4"),
			notru = $(".notru"),
			notru2 = $(".notru2");

		if (isInView(notru)) {
			$("#fact4").removeClass("active");
		}
		if (isInView(tru)) {
			$("#fact4").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(notru2)) {
			$("#fact4").removeClass("active");
		}

		var jud = $(".sb8"),
			nojud = $(".nojud"),
			nojud2 = $(".nojud2");

		if (isInView(nojud)) {
			$("#fact8").removeClass("active");
		}
		if (isInView(jud)) {
			$("#fact8").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nojud2)) {
			$("#fact8").removeClass("active");
		}

		var eld = $(".sb6"),
			noeld = $(".noeld"),
			noeld2 = $(".noeld2");

		if (isInView(noeld)) {
			$("#fact6").removeClass("active");
		}
		if (isInView(eld)) {
			$("#fact6").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(noeld2)) {
			$("#fact6").removeClass("active");
		}


		var theo = $(".sb7"),
			notheo = $(".notheo"),
			notheo2 = $(".notheo2");

		if (isInView(notheo)) {
			$("#fact7").removeClass("active");
		}
		if (isInView(theo)) {
			$("#fact7").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(notheo2)) {
			$("#fact7").removeClass("active");
		}

		var pio = $(".sb9"),
			nopio = $(".nopio"),
			nopio2 = $(".nopio2");

		if (isInView(nopio)) {
			$("#fact9").removeClass("active");
		}
		if (isInView(pio)) {
			$("#fact9").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nopio2)) {
			$("#fact9").removeClass("active");
		}

		var wor = $(".sb10"),
			nowor = $(".nowor"),
			nowor2 = $(".nowor2");

		if (isInView(nowor)) {
			$("#fact10").removeClass("active");
		}
		if (isInView(wor)) {
			$("#fact10").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nowor2)) {
			$("#fact10").removeClass("active");
		}

		var con = $(".sb11"),
			nocon = $(".nocon"),
			nocon2 = $(".nocon2");

		if (isInView(nocon)) {
			$("#fact11").removeClass("active");
		}
		if (isInView(con)) {
			$("#fact11").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nocon2)) {
			$("#fact11").removeClass("active");
		}

		var good = $(".sb13"),
			nogood = $(".nogood"),
			nogood2 = $(".nogood2");

		if (isInView(nogood)) {
			$("#fact13").removeClass("active");
		}
		if (isInView(good)) {
			$("#fact13").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nogood2)) {
			$("#fact13").removeClass("active");
		}

		var fade = $(".sb12"),
			nofade = $(".nofade"),
			nofade2 = $(".nofade2");

		if (isInView(nofade)) {
			$("#fact12").removeClass("active");
		}
		if (isInView(fade)) {
			$("#fact12").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nofade2)) {
			$("#fact12").removeClass("active");
		}

		var mem = $(".sb14"),
			nomem = $(".nomem"),
			nomem2 = $(".nomem2");

		if (isInView(nomem)) {
			$("#fact14").removeClass("active");
		}
		if (isInView(mem)) {
			$("#fact14").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nomem2)) {
			$("#fact14").removeClass("active");
		}

		var soc = $(".sb5"),
			nosoc = $(".nosoc"),
			nosoc2 = $(".nosoc2");

		if (isInView(nosoc)) {
			$("#fact5").removeClass("active");
		}
		if (isInView(soc)) {
			$("#fact5").addClass("active");
			// $("#fact2").removeClass("active");
		}
		if (isInView(nosoc2)) {
			$("#fact5").removeClass("active");
		}
	});

	$(".read").on("click", function () {
		var profile = $(this).closest(".profile"),
			bio = profile.find(".bio");
		bio.toggleClass("active");
		var arrow = $(this).find(".arrow");
		if (arrow.hasClass("down")) {
			arrow.removeClass("down");
			arrow.addClass("up");
		} else {
			arrow.addClass("down");
			arrow.removeClass("up");
		}
	});

	var pauseAudio = function (container) {
		var player = container.find("audio")[0];

		player.pause();
		//if you want the player to stop, instead of pause
		// player.currentTime = 0;
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
		var expert = $(this).next(".small-bio");
		// box = expert.find(".small-bio");
		expert.toggleClass("active");
		$(this).toggleClass("active");

		var bio = $(this).data("text"),
			age = $(this).data("age"),
			place = $(this).data("place");
		$(".mon").html(bio);
		$(".age").html(age);
		$(".place").html(place);

	});

	$(".name").on("mouseover", function () {
		$(this).css("background-color", "#dbdbdb");
	});

	$(".name").on("mouseout", function () {
		$(this).css("background-color", "#fff");
	});


});