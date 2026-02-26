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

    $to_email = "hello@meetmethere.club";
    $to_name = "MeetMeThere";

    // La clé API est injectée lors du déploiement via GitHub Actions
    $api_key = "__BREVO_API_KEY__";

    $payload = [
        "sender" => [
            "name" => $name . " (via MMT)",
            "email" => "hello@meetmethere.club"
        ],
        "to" => [
            [
                "email" => $to_email,
                "name" => $to_name
            ]
        ],
        "subject" => "Nouveau message de $name depuis MeetMeThere",
        "htmlContent" => "<html><body><p><strong>Nom :</strong> $name</p><p><strong>Email :</strong> $email</p><p><strong>Message :</strong></p><p>" . nl2br($message) . "</p></body></html>",
        "replyTo" => [
            "email" => $email,
            "name" => $name
        ]
    ];

    $ch = curl_init("https://api.brevo.com/v3/smtp/email");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "accept: application/json",
        "api-key: " . $api_key,
        "content-type: application/json"
    ]);

    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpcode >= 200 && $httpcode < 300) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Votre message a bien été envoyé."]);
    }
    else {
        http_response_code(500);
        error_log("Brevo API Error: " . $response);
        echo json_encode(["status" => "error", "message" => "Erreur lors de l'envoi du message par le serveur. Veuillez réessayer plus tard."]);
    }
}
else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Méthode non autorisée."]);
}
?>