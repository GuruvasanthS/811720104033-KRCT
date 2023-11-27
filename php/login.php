<?php
if (isset($_POST["email"]) && isset($_POST["password"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $defaultEmail = 'admin@gmail.com';
    $defaultPassword = '12345678';

    require_once "database.php";
    if ($email === $defaultEmail && $password === $defaultPassword) {
        session_start();
        $_SESSION["user"] = "yes";
        echo json_encode(['status' => 'success', 'message' => 'Login successful']);
    } else {
        // The provided email and password do not match the defaults
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = mysqli_query($conn, $sql);
        $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($user) {
            if (password_verify($password, $user["password"])) {
                session_start();
                $_SESSION["user"] = "yes";
                echo json_encode(['status' => 'success', 'message' => 'Login successful']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Password does not match']);
            }
        } else { 
            echo json_encode(['status' => 'error', 'message' => 'Email is not correct']);
        }
} 
}else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
?>
