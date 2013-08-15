jQuery( document ).ready( function( $ ) {
	$('a').each(function (i) {
		if (this.href.match(/\.mp3$/i)||this.href.match(/\.m4a$/i)) {
			var songID = i;
			$(this).before('<div id="harmonia-player-'+songID+'" class="harmonia-player"></div><span id="harmonia-controller-'+songID+'" class="harmonia-controller"><a id="play"><i class="play"></i></a><a id="pause" style="display: none;"><i class="pause"></i></a></span>');
		}
	});
	$('a#play').on("click", function( e ){
		e.preventDefault();
		var songLink = $(this).parent('span').next('a').attr("href");
		if (songLink.match(/\.mp3$/i)) {
			songType = 'mp3';
		} else if (songLink.match(/\.m4a$/i)) {
			songType = 'm4a';
		}
		var controllerAncestor = $(this).parent('span').attr("id");
		$(this).parent('span').prev('div').jPlayer({
			play: function( event ) { // To avoid both jPlayers playing together.
				$(this).jPlayer("pauseOthers");
			},
			ready: function () {
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