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
		$( ".js-menu__botton" ).on( "click", function() {
			$( this ).toggleClass( "open" );
			$( ".c-button__menu span" ).toggleClass( "open" );
			$( ".l-sidebar" ).slideToggle( "fast" );
		} );
	}
} );

jQuery( function( $ ) {	
	$( ".js-menu-item-objct-page" ).on( "mouseenter", function() {
		$( this ).removeClass( "close" ).addClass( "open" );
		$( ".Nav__body ul.sub-menu-page:not(:animated)" ).hide().removeClass( "close" ).slideDown( "fast" );
	} );
	$( ".js-menu-item-objct-page" ).on( "mouseleave", function() {
		$( this ).removeClass( "open" ).addClass( "close" );
		$( ".Nav__body ul.sub-menu-page" ).hide().removeClass( "open" ).slideUp( "fast" );
	} );
} );

jQuery( function( $ ) {	
	$( ".js-menu-item-object-courses" ).on( "mouseenter", function() {
		$( this ).removeClass( "close" ).addClass( "open" );
		$( ".Nav__body ul.sub-menu-courses:not(:animated)" ).hide().removeClass( "close" ).slideDown( "fast" );
	} );
	$( ".js-menu-item-object-courses" ).on( "mouseleave", function() {
		$( this ).removeClass( "open" ).addClass( "close" );
		$( ".Nav__body ul.sub-menu-courses" ).hide().removeClass( "open" ).slideUp( "fast" );
	} );
} );

jQuery( function( $ ) {	
	$( ".js-menu-item-object-graduates" ).on( "mouseenter", function() {
		$( this ).removeClass( "close" ).addClass( "open" );
		$( ".Nav__body ul.sub-menu-graduates:not(:animated)" ).hide().removeClass( "close" ).slideDown( "fast" );
	} );
	$( ".js-menu-item-object-graduates" ).on( "mouseleave", function() {
		$( this ).removeClass( "open" ).addClass( "close" );
		$( ".Nav__body ul.sub-menu-graduates" ).hide().removeClass( "open" ).slideUp( "fast" );
	} );
} );

jQuery( function( $ ) {	
	$( ".js-menu-item-object-media" ).on( "mouseenter", function() {
		$( this ).removeClass( "close" ).addClass( "open" );
		$( ".Nav__body ul.sub-menu-media:not(:animated)" ).hide().removeClass( "close" ).slideDown( "fast" );
	} );
	$( ".js-menu-item-object-media" ).on( "mouseleave", function() {
		$( this ).removeClass( "open" ).addClass( "close" );
		$( ".Nav__body ul.sub-menu-media" ).hide().removeClass( "open" ).slideUp( "fast" );
	} );
} );

jQuery( function( $ ) {	
	$( ".js-menu-item-object-support" ).on( "mouseenter", function() {
		$( this ).removeClass( "close" ).addClass( "open" );
		$( ".Nav__body ul.sub-menu-support:not(:animated)" ).hide().removeClass( "close" ).slideDown( "fast" );
	} );
	$( ".js-menu-item-object-support" ).on( "mouseleave", function() {
		$( this ).removeClass( "open" ).addClass( "close" );
		$( ".Nav__body ul.sub-menu-support" ).hide().removeClass( "open" ).slideUp( "fast" );
	} );
} );