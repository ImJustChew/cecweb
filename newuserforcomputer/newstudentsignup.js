var config = {
    apiKey: "AIzaSyCpWeoGzDrwoJjnsjBnDu-vVUt6LfGHyxk",
    databaseURL: "https://cecdbfirebase.firebaseio.com",
  };

$( document ).ready(function() {
    console.log( "ready!" );
    firebase.initializeApp(config);
    let database = firebase.database();
    $("#info-form").submit(function(event){
      var full_name    = $("#full_name").val();
      var username    = $("#username").val();
      var bool = false;
      if((full_name == "")&&(username == "")){
        toastText("Please fill in the fields",4000);
        return false;
      }
      if (/\s/.test(username)) {
        toastText("Username should not contains spaces",4000);
        return false;
      }
      var current_password = generatePassword();
      var newuser = {
        "full_name": full_name,
        "username": username,
        "otp_password": current_password
      }
      var newPostKey = database.ref().child('userWritable/newCompAcc').push(newuser, function(error) {
        if (error) {
          toastText(error,5000);
          return false;
        } else {
          console.log("Submit to Firebase");
          $("#personal-field").addClass("hidden");
          $("#success-field").removeClass("hidden");
          $("#username_text").text("Username: "+ username);
          $("#password_text").text("Password: "+ current_password);
          return false;
        }
      });
      return false;
      event.preventDefault();
    });
});

function toastText(toastMsg,timeout){
    var cssfade = (timeout/1000)-0.5;
    $("#snackbar").text(toastMsg);
    $("#snackbar").css("visibility","visible");
    $("#snackbar").css("-webkit-animation","fadein 0.5s, fadeout 0.5s "+cssfade.toString()+"s");
    $("#snackbar").css("animation","fadeout 0.5s "+cssfade.toString()+"s");
    setTimeout(function(){
      $("#snackbar").css("visibility","");
      $("#snackbar").css("-webkit-animation","");
      $("#snackbar").css("animation","");
    }, timeout);
}

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyz0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
