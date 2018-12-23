var config = {
    apiKey: "AIzaSyCpWeoGzDrwoJjnsjBnDu-vVUt6LfGHyxk",
    databaseURL: "https://cecdbfirebase.firebaseio.com",
  };

$( document ).ready(function() {
    console.log( "ready!" );
    firebase.initializeApp(config);
    let database = firebase.database();
    $("#info-form").submit(function(event){
      console.log("Submit to Firebase");
      var eng_name    = $('#eng_name').val();
      var chi_name    = $('#chi_name').val();
      var schoolID    = $('#schoolID').val();
      var lclass       = $('#class').val();
      var phone       = $('#phone').val();
      var address     = $('#address').val();
      var ic          = $('#ic').val();
      var email       = $('#email').val();
      var facebook    = $('#facebook').val();
      var special     = $('#special').val();
      var fathername  = $('#fathername').val();
      var fatherocc   = $('#fatherocc').val();
      var fatherphone = $('#fatherphone').val();
      var mothername  = $('#mothername').val();
      var motherocc   = $('#motherocc').val();
      var motherphone = $('#motherphone').val();
      var emergencyphone    = $('#emergencyphone').val();
      var emergencyrelation = $('#emergencyrelation').val();
      var additional1   = $('#additional1').val();
      var additional2   = $('#additional2').val();
      var additional3   = $('#additional3').val();
      var userIP = "";
      $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
        userIP = data.geobytesremoteip;
        var newUserData= {
          "eng_name": eng_name,
          "chi_name": chi_name,
          "schoolID": schoolID,
          "class": lclass,
          "phone": phone,
          "address": address,
          "ic":ic,
          "email":email,
          "facebook":facebook,
          "specials":special,
          "fathername":fathername,
          "fatherocc":fatherocc,
          "fatherphone":fatherphone,
          "mothername":mothername,
          "motherphone":motherphone,
          "motherocc":motherocc,
          "emergencyphone":emergencyphone,
          "emergencyrelation":emergencyrelation,
          "additional1":additional1,
          "additional2":additional2,
          "additional3":additional3,
          "senderIP":userIP
        }
        var newPostKey = database.ref().child('userWritable/newUserData/').push(newUserData);
      });
      event.preventDefault();
      return "coconut";
    })
});
