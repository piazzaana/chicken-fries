<?php
// Auto update the status field on save post

add_action('save_post', 'chickenfries_change_status', 10, 3);

function chickenfries_change_status($post_id, $post, $update){

  if( 'order' != get_post_type( $post_id)) return;

  if(isset($_POST['post_content'])){
    $outcome = $_POST['post_content'];
  }

  if(isset($_POST['post_title'])){
    if(empty($outcome)) {
      update_post_meta($post_id, 'order_status', false);
    } else {
      update_post_meta($post_id, 'order_status', true);
    }
  }
}

//register new rest field for order status
add_action('rest_api_init', 'chickenfries_register_order_status');
function chickenfries_register_order_status(){
  regiter_rest_field(
    'order',
    'order_status',
    array(
      'get_callback'    => 'chickenfries_get_order_status',
      'update_callback' => 'chickenfries_update_task_status',
      'schema'          => null,
    )
  );
}

function chickenfries_get_order_status($object, $field_name, $request){
  return get_post_meta($object['id'], $field_name, false);
}

function chickenfries_update_task_status($value, $object, $field_name){
  if(is_bool($value) !== true){
    return;
  }

  update_post_meta($object->ID, $field_name, $value);
}
