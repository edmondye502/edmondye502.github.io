<?php
//processComments.php

//Construct the message to be sent to me.
$messageToMe =
    "From: " .$_POST['name']."\r\n" .
    $_POST['comments']."\r\n";

$to = "edmondye502@gmail.com"

//Send the e-mail feedback message to the business (but here, to the webbook site)
mail($to, "Comment About Your Website", $messageToMe);
