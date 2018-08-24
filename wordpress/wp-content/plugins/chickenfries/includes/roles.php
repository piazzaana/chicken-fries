<?php
// register customer role
function chickenfries_register_role(){
  add_role('customer', 'Customer');
}

// remove customer role
function chickenfries_remove_role(){
  remove_role('customer', 'Customer');
}

// grant order level capability to administrator, editor and customer
function chickenfries_add_capabilities(){

  $roles = array( 'administrator', 'editor', 'customer' );

	foreach( $roles as $the_role ) {
		$role = get_role( $the_role );
		$role->add_cap( 'read' );
		$role->add_cap( 'edit_orders' );
		$role->add_cap( 'publish_orders' );
		$role->add_cap( 'edit_published_orders' );
	}

	$manager_roles = array( 'administrator', 'editor' );

	foreach( $manager_roles as $the_role ) {
		$role = get_role( $the_role );
		$role->add_cap( 'read_private_orders' );
		$role->add_cap( 'edit_others_orders' );
		$role->add_cap( 'edit_private_orders' );
		$role->add_cap( 'delete_orders' );
		$role->add_cap( 'delete_published_orders' );
		$role->add_cap( 'delete_private_orders' );
		$role->add_cap( 'delete_others_orders' );
	}

}

// remove order level capabilities
function chickenfries_remove_capabilities(){

  $manager_roles = array( 'administrator', 'editor' );

	foreach( $manager_roles as $the_role ) {
		$role = get_role( $the_role );
		$role->remove_cap( 'read' );
		$role->remove_cap( 'edit_orders' );
		$role->remove_cap( 'publish_orders' );
		$role->remove_cap( 'edit_published_orders' );
		$role->remove_cap( 'read_private_orders' );
		$role->remove_cap( 'edit_others_orders' );
		$role->remove_cap( 'edit_private_orders' );
		$role->remove_cap( 'delete_orders' );
		$role->remove_cap( 'delete_published_orders' );
		$role->remove_cap( 'delete_private_orders' );
		$role->remove_cap( 'delete_others_orders' );
	}
}
