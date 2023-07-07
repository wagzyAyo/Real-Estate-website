<?php
if (!empty($_POST["submit"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $toEmail = "talktojmcvibes@gmail.com";
    $fromEmail = $_POST["email"];


    $mailHeaders = "Name:" . $name . 
    "\r\n Email: " . $email . 
    "\r\n Message: " . $message . "\r\n";

   header("Location: sent.html");
}
?>