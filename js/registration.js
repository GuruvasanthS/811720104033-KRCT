function validateForm() {
    var fullname = document.forms[0]["fullname"].value;
    var email = document.forms[0]["email"].value;
    var password = document.forms[0]["password"].value;
    var repeatPassword = document.forms[0]["repeat_password"].value;

    if(password.length < 8){
        alert("password should be atleat 8 characters");
        return false;
    }
    if (fullname.trim() === "" || email.trim() === "" || password.trim() === "" || repeatPassword.trim() === "") {
        alert("All fields are required");
        return false;
    }

    if (password !== repeatPassword) {
        alert("Passwords do not match");
        return false;
    }
    

    // You can add more validation logic here if needed.

    return true;
}
