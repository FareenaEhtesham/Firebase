function createUser() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    var confirmPassword=document.getElementById("confirmpass").value;

    console.log(password);
    console.log(confirmPassword);
    //validate that both passwords are same
    if(password==confirmPassword)
    {
        


        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            function () {
                //this function executes when account is successfully created
                alert("Account Created Successfully!!!")
                window.location="Signin.html";

        }).catch(function (error) {
           //this function handles errors
            var errorMessage=error.message;
            alert(errorMessage);
        });

    }
    else
    {
        //alert when password did not matches
        alert("password does not matches");

    }

}
