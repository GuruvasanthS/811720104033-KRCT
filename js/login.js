document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var emailInput = document.querySelector("input[name='email']");
        var passwordInput = document.querySelector("input[name='password']");

        if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Please enter both email and password.");
            return;
        }

        // AJAX call to backend using $.post
        $.post("php/login.php", { email: emailInput.value, password: passwordInput.value }, function(response) {
            console.log(response); // Log the response for debugging

            if (response.status === 'success') {
                // Redirect to index.html if login is successful
                window.location.replace('index.html');
            } else {
                alert('Login Failed: ' + response.message);
            }
        }, 'json');
    });
});
