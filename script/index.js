var scrollPosition = "";
var totalHeight = "";
var initAbout = true;
var initAchievements = false;
var initServices = true;
var initUpdates = true;
var serviceslocked = false;
var buttonTakeOver = false;

var config = {
  apiKey: "AIzaSyCpWeoGzDrwoJjnsjBnDu-vVUt6LfGHyxk",
  authDomain: "cecdbfirebase.firebaseapp.com",
  databaseURL: "https://cecdbfirebase.firebaseio.com",
  projectId: "cecdbfirebase"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    toastText("Welcome Back",5000);
    $(".login-text").text("Log out");
  } else {
  }
});

function checkLoginStatus(){
  var currentStatus = $(".login-text").text();
  if(currentStatus.includes("Log out")){
    firebase.auth().signOut().then(function() {
            toastText("Log out Successful",5000);
            $(".login-text").text("Log in");
          }, function(error) {
            toastText(error,5000);
          });
  }
  else window.location.href = 'login.html';
}

$(window).on("load", function() {
    scrollPosition = $(window).scrollTop();
});

$(window).on("scroll", function() {

    if ((scrollPosition >= $(".achievements").offset().top / 1.5) && !initAchievements ) {
  		$('.achievements-left-total-num').each(function () {
  			$(this).prop('Counter',-1).animate({
  				Counter: $(this).text()
  			}, {
  				duration: 2000,
  				easing: 'swing',
  				step: function (now) {
  					$(this).text(Math.ceil(now));
  				}
  			});
  			initAchievements = true;
  		});
  	}
});

var clicked_times = 0;
function notaneasteregg(){
  clicked_times++;
  if(clicked_times ==100){
    inputText(".home-desc","魔鬼藏在细节中！",40);
  }
}

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
