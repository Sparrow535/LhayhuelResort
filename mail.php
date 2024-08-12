<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace this email with the recipient's email
    $mail_to = "paldencjatsho@gmail.com";

    // Sender Data
    $subject = trim($_POST["subject"]);
    $name = str_replace(array("\r","\n"),array(" "," "), strip_tags(trim($_POST["name"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    // Validate the form data
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($phone) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Mail Content
    $content = "Name: $name\n";
    $content .= "Email: $email\n\n";
    $content .= "Phone: $phone\n";
    $content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";

    // Send the email
    $success = mail($mail_to, $subject, $content, $headers);

    if ($success) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send your message.";
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
