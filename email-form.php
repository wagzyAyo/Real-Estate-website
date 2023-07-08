<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    

    $email_from = 'classiccybertech@gmail.com';

    $email_body = "username : $name. \n".
                   "Email : $email. \n".
                   "Subject : $subject. \n".
                   "Message : $message. \n";

$to = "talktojmcvibes@gmail.com";

$headers = "from: $email_from \r\n";
$headers = "Reply-to: $email \r\n";

mail($to,$subject,$email_body,$headers);

header("Location : Contact.html");




?>