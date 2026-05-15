<?php

$API_KEY = "6863334230:AAHz0_U3p5EqlcZchBuJypGCYQ1mMDfMP34";
$chat_id = -1002062076856;
// -1002062076856

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$insta_link = $_POST['insta_link'];
$comments = $_POST['comments'];

$message = "👤 Name: {$name}\n";
$message .= "📞 Phone: {$phone}\n";
$message .= "📧 Email: {$email}\n";
$message .= "🔗 Instagram link: {$insta_link}\n\n";
$message .= "📩 Comments: {$comments}\n";

if(isset($name)) {

$url = 'https://api.telegram.org/bot' . $API_KEY . '/sendMessage?';

$fields = [
    'chat_id' => urlencode($chat_id),
    'parse_mode' => urlencode('HTML'),
    'text' => urlencode($message),
];

//url-ify the data for the POST
foreach ($fields as $key => $value) {
    $fields_string .= $key . '=' . $value . '&';
}
$fields_string = rtrim($fields_string, '&');

$fields_string = str_replace(' ', '', $fields_string);

//echo $fields_string;

header("Location: {$url}{$fields_string}");

}
?>