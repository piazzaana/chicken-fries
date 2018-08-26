<?php
/*
Plugin Name: Chicken & Fries
Plugin URI:  N/A
Description: Help business owner to manage content on the website
Version:     0.0.1
Author:      Ana Cristina Piazza
Author URI:  https://anacristinacamargo.wordpress.com
Text Domain: chickenfries
Domain Path: /languages
License:     GPL3

Chicken & Fries is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Chicken & Fries is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Chicken & Fries. If not, see https://www.gnu.org/licenses/gpl.html.
*/


// register order post type
require_once plugin_dir_path( __FILE__ ) . 'includes/posttypes.php';
register_activation_hook(__FILE__, 'chickenfries_rewrite_flush');

// register customer role
require_once plugin_dir_path(__FILE__) . 'includes/roles.php';
register_activation_hook(__FILE__, 'chickenfries_register_role');
register_deactivation_hook(__FILE__, 'chickenfries_remove_role');

//add capabilities
register_activation_hook(__FILE__,'chickenfries_add_capabilities');
register_deactivation_hook(__FILE__,'chickenfries_remove_capabilities');

//require status
require_once plugin_dir_path(__FILE__).'includes/status.php';

//add cmb2 for new fields
require_once plugin_dir_path( __FILE__ ) . 'includes/CMB2-functions.php';

// Grant order access for index pages for certain users.
add_action('pre_get_posts', 'chickenfries_grant_access');

function chickenfries_grant_access($query){

  // Make sure the query contains a post_type query_var,
	// otherwise it's definitely not a request for Order(s):
  if(isset($query->query_vars['post_type'])){

    // Check if the request is for the Order post type…
    if($query->query_vars['post_type'] == 'order'){

      // … and that this is a REST request:
      if(defined('REST_REQUEST') && REST_REQUEST){

        if(current_user_can('editor') || current_user_can('administrator')){

          // If so, Editors and Administrators see all private orders…
          $query->set( 'post_status', 'private' );
          
        }elseif (current_user_can('customer')) {

          $query->set( 'post_status', 'private' );
					$query->set( 'author', get_current_user_id() );
        }
      }
    }
  }
}
