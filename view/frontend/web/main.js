// 2019-08-12
define(['jquery'], function($) {return function() {
	// 2019-08-12
	// "Implement the «See More» button for the «CRA Audit Notes» section,
	// and show only 6 products before the button is pressed":
	// https://github.com/clinessentials/core/issues/18
	(function() {
		var open = false;
		var $hidden = $('section.clin-cra-audit-notes .row > div').slice(-6);
		$('button.cline-more').click(function() {
			open = !open;
			$(this).html('See ' + (open ? 'Less' : 'More') + '…');
			$hidden.css('display', open ? 'block' : 'none');
		});
	})();
	// 2019-08-15
	// "Hide the hamburger menu on a mouse click outside of it"
	// https://github.com/clinessentials/core/issues/43
	(function() {
		var $e = $('nav.navbar #navbar');
		$(document).click(function() {$e.removeClass('in');});
	})();
	// 2019-08-15
	// "The «Back» browser's button on the frontend checkout page
	// should lead the customer to the cart page from the first attempt
	// (now it works only on the second attempt)":
	// https://github.com/clinessentials/core/issues/45
	$(window).on('hashchange', function(e) {
		var o = e.originalEvent;
		if (o.oldURL.endsWith('checkout/#shipping') && o.newURL.endsWith('checkout/')) {
			window.location.pathname = '/checkout/cart/';
		}
	});
}});