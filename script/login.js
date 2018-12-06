var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);

var config = {
  apiKey: "AIzaSyCpWeoGzDrwoJjnsjBnDu-vVUt6LfGHyxk",
  authDomain: "cecdbfirebase.firebaseapp.com",
  databaseURL: "https://cecdbfirebase.firebaseio.com",
  projectId: "cecdbfirebase"
};

firebase.initializeApp(config);

if(queryString.length > 0){
  var queries = queryString.split("&");

  var email = queries[0].split("=");
  var password = queries[1].split("=");

  firebase.auth().signInWithEmailAndPassword(email[1], password[1]).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    toastText(errorMessage,10000);
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    toastText("Sign-in successful",3000);
    setTimeout(function(){window.location.replace('index.html');},2000);
  } else {
  }
});


(function ($) {
    "use strict";

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return true;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }

    });


})(jQuery);

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
