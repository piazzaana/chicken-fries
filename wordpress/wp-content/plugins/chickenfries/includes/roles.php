<?php
// register customer role
function chickenfries_register_role(){
  add_role('customer', 'Customer');
}

// remove customer role
function chickenfries_remove_role(){
  remove_role('customer', 'Customer');
}

// grant order level capabilities to administrator, editor and customer
function chickenfries_add_capabilities(){

  $roles = array('administrator', 'customer'),

  foreach ($role as $the_role) {

    $role = get_role($the_role);
    $role->add_cap('read');
    $role->add_cap('edit_orders');
    $role->add_cap('publish_orders');
    $role->add_cap('edit_published_orders');
  }
}
