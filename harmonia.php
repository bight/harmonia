<?php
/**
 * @package Harmonia
 * @version 1.0
 */
/*
Plugin Name: Harmonia
Plugin URI: http://wordpress.org/plugins/harmonia/
Description: Turns links to MP3 and M4A files into minimalist inline audio players.
Author: Ned Zimmerman
Version: 1.0
Author URI: http://bight.ca/
*/

define( 'HARMONIA_VERSION', 1 );
define( 'HARMONIA_URL', plugin_dir_url( __FILE__ ));

add_action( 'wp_enqueue_scripts', 'harmonia_enqueue_assets' );

function harmonia_enqueue_assets() { ?>
	<script type="text/javascript">var flashPath = '<?php echo HARMONIA_URL; ?>swf/';</script>
	<?php wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'jplayer-js', HARMONIA_URL .'js/jquery.jplayer.min.js', 'jquery', '2.4.0' );
	wp_enqueue_script( 'harmonia-js', HARMONIA_URL .'js/harmonia.js', 'jquery', HARMONIA_VERSION );
	wp_enqueue_style(  'harmonia-css', HARMONIA_URL .'css/harmonia.css', null, HARMONIA_VERSION );
}