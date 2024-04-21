jQuery( function( $ ) {
	var timer = false;
		$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
		location.reload();
		}, 50);
	} );
} );

jQuery( function( $ ) {
	if (window.matchMedia( '(max-width: 1203px)' ).matches) {
		$( ".js-menu__button" ).on( "click", function() {
			$( ".l-sidebar" ).toggleClass( "is-open" );
		} );
	}
} );