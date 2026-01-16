<?php

$to = "myyadavmayank1998@gmail.com";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(403);
  exit("Forbidden");
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? 'Contact Form');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
  exit("Missing required fields");
}

$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$body = "From: $name\nEmail: $email\n\n$message";

if (mail($to, $subject, $body, $headers)) {
  echo "OK";
} else {
  echo "Mail failed";
}
