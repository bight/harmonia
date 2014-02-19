/**
 * Harmonia
 * Author: Ned Zimmerman
 * Version: 1.0.3
 * License: GPLv2 or later
 */

jQuery(document).ready( function($) {
	$('a').each(function(i) {
		if (this.href.match(/\.mp3$/i)||this.href.match(/\.m4a$/i)) {
			var songID = i;
			$(this).prepend('<span class="icon play"></span>');
			$(this).before('<div id="harmonia-player-'+songID+'" class="harmonia-player"></div>');
			$(this).wrap('<span id="harmonia-controller-'+songID+'" class="harmonia-controller"></span>');
			$(this).attr('id', 'play');
		}
	});
	$('a#play').bind("click", function(e){
		e.preventDefault();
		var songLink = $(this).attr("href");
		if (songLink.match(/\.mp3$/i)) {
			songType = 'mp3';
		} else if (songLink.match(/\.m4a$/i)) {
			songType = 'm4a';
		}
		var controllerAncestor = $(this).parent('span').attr('id');
		$(this).parent('span').prev('div').jPlayer({
			play: function( event ) {
				$(this).next('span').children('a').attr('id','pause');
				$(this).next('span').children('a').children('span.icon').removeClass('play').addClass('pause');
				$(this).jPlayer("pauseOthers"); // To avoid both jPlayers playing together.
			},
			pause: function( event ) {
				$(this).next('span').children('a').attr('id','play');
				$(this).next('span').children('a').children('span.icon').removeClass('pause').addClass('play');
			},
			ready: function() {
				if ( songType === 'mp3' ) {
					$(this).jPlayer("setMedia", {
						mp3:songLink
					});
				} else if ( songType === 'm4a' ) {
					$(this).jPlayer("setMedia", {
						m4a:songLink
					});
				}
				$(this).jPlayer("play");
				
			},
			cssSelectorAncestor: '#'+controllerAncestor,
			cssSelector: {
				play: "#play",
				pause: "#pause"
			},
			swfPath: flashPath,
			solution:"html,flash",
			supplied:songType
		});
	});
} );