//Required field validator + if else lf


$(document).ready(function () {
    $("#submit").click(
        function () {
            var isValid = true;
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email_sign").val();
            if (email == "") {
                $("#email_sign").next().text("This field is required.");
                isValid = false;
            } else if (emailPattern.test(email)) {
                $("#email_sign").next().text("Must be a valid email address.");
                isValid = false;
            } 
            else {
                $("#email_sign").next().text("");
            }

            var password = $("#psw").val();
            console.log(password)
            if (password == "") {
                $("#psw").next().text("This field is required.");
                isValid = false;
            } else if (password.length < 8) {
                $("#psw").next().text("password must be more than 8 character");
                isValid = false;

            } else {
                $("#psw").next().text("");
            }
            var password1 = $("#psw-repeat").val();
            console.log(password1)
            if (password1 == "") {
                $("#psw-repeat").next().text("This field is required.");
                isValid = false;
            } else if (password.length < 8) {
                $("#psw-repeat").next().text("password must be more than 8 character");
                isValid = false;
            } else if (password != password1) {
                $("#psw-repeat").next().text("password must match");
                isValid = false;
            } else {
                $("#psw-repeat").next().text("");
            }
            
            console.log(password,password1)
            if (isValid) {
                window.location.href = "afterlogin.html";
            }
            
        }

    )
});
