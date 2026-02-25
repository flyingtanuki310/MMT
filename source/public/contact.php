<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Veuillez remplir tous les champs obligatoires."]);
        exit;
    }
    
    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($data['message']));
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Adresse email invalide."]);
        exit;
    }

    $to = "hello@meetmethere.club";
    $subject = "Nouveau message de $name depuis MeetMeThere";
    
    $body = "Nouveau message reçu depuis le formulaire de contact du site :\n\n";
    $body .= "Nom : $name\n";
    $body .= "Email : $email\n\n";
    $body .= "Message :\n$message\n";
    
    // Pour éviter d'être bloqué par le serveur SMTP Hostinger, l'expéditeur principal doit
    // être le compte, mais on peut mettre l'adresse de l'utilisateur dans Reply-To
    $headers = "From: hello@meetmethere.club\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Votre message a bien été envoyé."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Erreur lors de l'envoi du message par le serveur. Veuillez réessayer plus tard."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Méthode non autorisée."]);
}
?>
