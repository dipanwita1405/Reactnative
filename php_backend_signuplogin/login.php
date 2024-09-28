<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$servername = "localhost"; 
$username = "root"; 
$password = "Dipanwita3018@"; 
$dbname = "react_native_signup_login";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];


$stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    
    $stmt->bind_result($hashedPassword);
    $stmt->fetch();

    if (password_verify($password, $hashedPassword)) {
        echo json_encode(["message" => "Login successful!"]);
    } else {
        echo json_encode(["message" => "Invalid password."]);
    }
} else {
    echo json_encode(["message" => "User does not exist."]);
}

$stmt->close();
$conn->close();
?>
