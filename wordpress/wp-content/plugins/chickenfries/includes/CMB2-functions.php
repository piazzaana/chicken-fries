<?php
/**
 * Include and setup custom metaboxes and fields
 * @link     https://github.com/CMB2/CMB2
 */
/**
 * Get the bootstrap! If using the plugin from wordpress.org, REMOVE THIS!
 */
if ( file_exists( dirname( __FILE__ ) . '/cmb2/init.php' ) ) {
	require_once dirname( __FILE__ ) . '/cmb2/init.php';
} elseif ( file_exists( dirname( __FILE__ ) . '/CMB2/init.php' ) ) {
	require_once dirname( __FILE__ ) . '/CMB2/init.php';
}

/**
 * Only show this box in the CMB2 REST API if the user is logged in.
 *
 * @param  bool                 $is_allowed     Whether this box and its fields are allowed to be viewed.
 * @param  CMB2_REST_Controller $cmb_controller The controller object.
 *                                              CMB2 object available via `$cmb_controller->rest_box->cmb`.
 *
 * @return bool                 Whether this box and its fields are allowed to be viewed.
 */
 function chickenfries_limit_rest_view_to_logged_in_users( $is_allowed, $cmb_controller ) {
 	if ( ! is_user_logged_in() ) {
 		$is_allowed = false;
 	}

 	return $is_allowed;
 }

 /**
  * Hook in and add a box to be available in the CMB2 REST API. Can only happen on the 'cmb2_init' hook.
  * More info: https://github.com/CMB2/CMB2/wiki/REST-API
  */
  add_action( 'cmb2_init', 'chickenfries_register_rest_api_box' );

  function chickenfries_register_rest_api_box() {
  	$prefix = 'chickenfries_rest_';

  	$cmb_rest = new_cmb2_box( array(
  		'id'            => $prefix . 'metabox',
  		'title'         => esc_html__( 'Chicken & Fries Data Box', 'chickenfries' ),
  		'object_types'  => array( 'order' ), // Post type
  		'show_in_rest' => WP_REST_Server::ALLMETHODS, // WP_REST_Server::READABLE|WP_REST_Server::EDITABLE, // Determines which HTTP methods the box is visible in.
  		// Optional callback to limit box visibility.
  		// See: https://github.com/CMB2/CMB2/wiki/REST-API#permissions
  		'get_box_permissions_check_cb' => 'chickenfries_limit_rest_view_to_logged_in_users',
  	) );

  	$cmb_rest->add_field( array(
  		'name'       => esc_html__( 'REST Test Text', 'cmb2' ),
  		'desc'       => esc_html__( 'Will show in the REST API for this box and for pages.', 'cmb2' ),
  		'id'         => $prefix . 'text',
  		'type'       => 'text',
  	) );

  	$cmb_rest->add_field( array(
  		'name'       => esc_html__( 'REST Editable Test Text', 'cmb2' ),
  		'desc'       => esc_html__( 'Will show in REST API "editable" contexts only (`POST` requests).', 'cmb2' ),
  		'id'         => $prefix . 'editable_text',
  		'type'       => 'text',
  		'show_in_rest' => WP_REST_Server::EDITABLE,// WP_REST_Server::ALLMETHODS|WP_REST_Server::READABLE, // Determines which HTTP methods the field is visible in. Will override the cmb2_box 'show_in_rest' param.
  	) );
  }
