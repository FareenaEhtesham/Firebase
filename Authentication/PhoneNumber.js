
  
  var firebaseConfig = {
    
    
    //Firebase Configuration

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db =firebase.firestore();


//Phone Verification
  function render() {
      window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
  function phoneAuth() {
      //get the number
      var number=document.getElementById('number').value;
      //phone number authentication function of firebase
      //it takes two parameter first one is number,,,second one is recaptcha
      firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
          //s is in lowercase
          window.confirmationResult=confirmationResult;
        //   coderesult=confirmationResult;
        //   console.log(coderesult);
          alert("Message sent");
      }).catch(function (error) {
          alert(error.message);
      });
  }
  function codeverify() {
      var code=document.getElementById('verificationCode').value;
      confirmationResult.confirm(code).then(function (result) {
          alert("Successfully registered");
        //   var user=result.user;
        //   console.log(user);
      }).catch(function (error) {
          alert(error.message);
      });
  }