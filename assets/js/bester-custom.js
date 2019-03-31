jQuery(document).ready(function () {

	// validator form
	$('.animationInput,.selectmations').click(function () {
		$(this).siblings('.form-group__ > label').addClass('colorLabel');
	});
	// --
	$.validate({
		borderColorOnError: '#cc0c0c',
		errorMessagePosition: 'top',
	});

	// --

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

	$('#menu-toggle').click(function () {
		$(this).toggleClass('open');
		if ($('#hamburger').hasClass('active')) {

			$('#hamburger').removeClass('active');
			$('#cross').addClass('active');

			$('.navbar-child').removeClass('fadeOut').addClass('fadeIn').fadeIn('fast');
			$('.navbar-layout').removeClass("fadeIn").addClass("fadeOut").fadeOut('fast', function () {
				$('.navbar-brand > img').css("filter","brightness(10)");
			});

		} else if ($('#cross').hasClass('active')) {

			$('#cross').removeClass('active');
			$('#hamburger').addClass('active');

			$('.navbar-layout').removeClass("fadeOut").addClass("fadeIn").fadeIn('fast');
			$('.navbar-child').removeClass('fadeIn').addClass('fadeOut').fadeOut('fast', function () {
				$('.navbar-brand > img').css("filter","");
			});
		}
	});

});

// $('#getNavchild').click(function(){
// 	$('.navbar-child').fadeIn();
// });