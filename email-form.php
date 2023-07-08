<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    

    $email_from = 'classiccybertech@gmail.com';

    $email_body = "username : $name. \n".
                   "Email : $email. \n".
                   "Message : $message. \n";

$to = "talktojmcvibes@gmail.com";

$headers = "from: $email_from \r\n";
$headers = "Reply-to: $email \r\n";

mail($to,$email_body,$headers);

header("Location : Contact.html");




?>