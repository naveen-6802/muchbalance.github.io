<?php

//add_comment.php

$sub_msg = '';
$username = '';
$message = '';

if(empty($_POST["username"]))
{
 $sub_msg .= '<p class="text-danger">Please enter username</p>';
}
else
{
 $username = $_POST["username"];
}
if(empty($_POST["message"]))
{
 $sub_msg .= '<p class="text-danger">Please write message</p>';
}
else
{
 $message = $_POST["message"];
}

if($sub_msg == '')
{
 if(file_exists('users_messages.json'))  
           {  
                $current_data = file_get_contents('users_messages.json');  
                $array_data = json_decode($current_data, true);  
                $extra = array(  
                     'Username'				=>     $_POST['username'],  
                     'Message'          =>     $_POST['message']
                );  
                $array_data[] = $extra;  
                $final_data = json_encode($array_data);  
                if(file_put_contents('users_messages.json', $final_data))  
                {  
                     $sub_msg = '<label class="text-success">Message Sent</label>'; 
                }  
           }  
           else  
           {  
                $sub_msg = 'JSON File not exits';  
           }  
 $sub_msg = '<p class="text-success">Message Sent</p>';
}

$data = array(
 'sub_msg'  => $sub_msg
);

echo json_encode($data);

?>
