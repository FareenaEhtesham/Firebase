function Reset(){
        
    var auth =firebase.auth();
    var email = document.querySelector("#email").val();

    if(email !=""){

        auth.sendPasswordResetEmail(email).then(function(){

            window.alert("Please Check your email")

        }).catch(function(error){

            console.log(error)

        });

    }

    else{
        window.alert("please enter your mail")
    }

}