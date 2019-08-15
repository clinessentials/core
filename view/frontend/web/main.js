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
}});