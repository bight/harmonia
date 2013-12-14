<?php
/**
 * @package Harmonia
 * @version 1.0.3
 */
/*
Plugin Name: Harmonia
Plugin URI: http://wordpress.org/plugins/harmonia/
Description: Harmonia turns any link to an MP3 or M4A file into a minimalist inline audio player.
Author: Ned Zimmerman
Version: 1.0.3
Author URI: http://bight.ca/
License: GPLv2 or later
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

define( 'HARMONIA_VERSION', '1.0.3' );
define( 'HARMONIA_URL', plugin_dir_url( __FILE__ ));

add_action( 'wp_enqueue_scripts', 'harmonia_enqueue_assets' );

function harmonia_enqueue_assets() { ?>
	<script type="text/javascript">var flashPath = '<?php echo HARMONIA_URL; ?>swf/';</script>
	<?php wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'jplayer-js', HARMONIA_URL .'js/jquery.jplayer.min.js', 'jquery', '2.4.0' );
	wp_enqueue_script( 'harmonia-js', HARMONIA_URL .'js/harmonia.js', 'jquery', HARMONIA_VERSION );
	wp_enqueue_style(  'harmonia-css', HARMONIA_URL .'css/harmonia.css', null, HARMONIA_VERSION );
}