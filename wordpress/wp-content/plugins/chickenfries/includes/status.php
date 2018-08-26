<?php
// auto update the status field on sae post
add_action('save_post', 'chickenfries_change_status', 10, 3);

function chickenfries_change_status($post_id, $post, $update){
  // make sure this is an order, if not abandon immediately
  if('order' != get_post_type($post_id)) return;

  //get the status of the content Box
  if(isset($_POST['post_content'])){
    $outcome = $_POST['post_content'];
  }

  // if the order has a title (meaning it is not a brand new order),
  // update order_status based on the status of $outcome:
  if(isset($_POST['post_title'])){
    if(empty($outcome)){
      update_post_meta($post_id, 'order_status', false);
    }else{
      update_post_meta($post_id, 'order_status', true);
    }
  }
}

// Register new REST field for order_status.
add_action('rest_api_init', 'chickenfries_register_order_status');

function chickenfries_register_order_status(){

  register_rest_field(
    'order',
    'order_status',
    array(
      'get_callback' => 'chickenfries_get_order_status',
      'update_callback' => 'chickenfries_update_order_status',
      'schema' => null
    )
  );
}

function chickenfries_get_order_status($object, $field_name, $request){

  return get_post_meta($object['id'], $field_name, true);
}

function chickenfries_update_order_status($value, $object, $field_name){

  $value = json_decode($value);
  if(is_bool($value) === true){
    return;
  }

  return update_post_meta($object->ID, $field_name, $value);
}
