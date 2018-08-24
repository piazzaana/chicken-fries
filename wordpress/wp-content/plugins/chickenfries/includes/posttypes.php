<?php
/**
 * Register a custom post type called "Order".
 *
 * @see get_post_type_labels() for label keys.
 */
function chickenfries_cpt_init() {
    $labels = array(
        'name'                  => _x( 'Orders', 'Post type general name', 'chickenfries' ),
        'singular_name'         => _x( 'Order', 'Post type singular name', 'chickenfries' ),
        'menu_name'             => _x( 'Orders', 'Admin Menu text', 'chickenfries' ),
        'name_admin_bar'        => _x( 'Order', 'Add New on Toolbar', 'chickenfries' ),
        'add_new'               => __( 'Add New', 'chickenfries' ),
        'add_new_item'          => __( 'Add New Order', 'chickenfries' ),
        'new_item'              => __( 'New Order', 'chickenfries' ),
        'edit_item'             => __( 'Edit Order', 'chickenfries' ),
        'view_item'             => __( 'View Order', 'chickenfries' ),
        'all_items'             => __( 'All Orders', 'chickenfries' ),
        'search_items'          => __( 'Search Orders', 'chickenfries' ),
        'parent_item_colon'     => __( 'Parent Orders:', 'chickenfries' ),
        'not_found'             => __( 'No Orders found.', 'chickenfries' ),
        'not_found_in_trash'    => __( 'No Orders found in Trash.', 'chickenfries' ),
        'featured_image'        => _x( 'Order Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'chickenfries' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'chickenfries' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'chickenfries' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'chickenfries' ),
        'archives'              => _x( 'Order archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'chickenfries' ),
        'insert_into_item'      => _x( 'Insert into Order', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'chickenfries' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this Order', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'chickenfries' ),
        'filter_items_list'     => _x( 'Filter Orders list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'chickenfries' ),
        'items_list_navigation' => _x( 'Orders list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'chickenfries' ),
        'items_list'            => _x( 'Orders list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'chickenfries' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => false,
        'publicly_queryable' => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'orders' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
		    'show_in_rest'       => true,
		    'rest_base'          => 'Orders',
        'menu_position'      => null,
		    'menu_icon'          => 'dashicons-exerpt-view',
        'supports'           => array( 'title', 'editor', 'author' ),
    );

    register_post_type( 'order', $args );
}

add_action( 'init', 'chickenfries_cpt_init' );
