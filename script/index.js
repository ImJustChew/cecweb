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

var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

var servicescene;
$(".services").each(function() {
    servicescene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '200%'
    })
    .setPin(this)
    .addTo(ctrl);
});

$(window).on("load", function() {
    scrollPosition = $(window).scrollTop();
    var progress = scrollPosition / totalHeight * 100;
    $(".progressbar-thumb").css("height",progress + "%");
    totalHeight = $(".home").height() + $(".about").height() + $(".goal").height() + $(".achievements").height() + $(".services").height() + $(".contact").height() + $(".footer").height();
    inputText(".home-title-a","A STEP AHEAD",40);
    setTimeout(function() {
        inputText(".home-title-b","OF THE WORLD",40);
        setTimeout(function() {
            $(".home-desc").addClass("fadeIn");
        },1000);
    },600);
});

$(window).on("scroll", function() {
    var startServices = servicescene.scrollOffset();
    var endServices = servicescene.scrollOffset() + servicescene.duration();
    scrollPosition = $(window).scrollTop();
    if ((scrollPosition >= $(".about").offset().top / 1.5) && initAbout) {
          $(".about-l3").css("z-index",5);
          $(".about-l3").addClass("fadeIn");
          $(".about-history").addClass("fadeIn");
          setTimeout(function() {
              $(".about-learn-more").addClass("fadeIn ");
          },100);
      initAbout = false;
    }

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

    if ((scrollPosition >= $(".services").offset().top) && initServices) {
      changeServicesMenu(1);
      $(".services-content-content").addClass("fadeIn");
      $(".service-content-text").addClass("fadeOut");
      initServices = false;
    }
    if(!buttonTakeOver){
      if(scrollPosition >= startServices){
        var perSection = (endServices - startServices)/4;
        if(scrollPosition >= startServices + perSection*1){
          if(scrollPosition >= startServices + perSection*2){
            if(scrollPosition >= startServices + perSection*3){
              changeServicesMenu(4);
            } else{changeServicesMenu(3); }
          }
          else { changeServicesMenu(2); }
        }
        else { changeServicesMenu(1); }
      }
    }

});

var textcount = 0;
var texttyped = "";
function inputText(target,targettext,time) {
    setTimeout(function() {
        if (textcount <= targettext.length - 1) {
            texttyped += targettext[textcount];
            $(target).text(texttyped);
            textcount++;
            inputText(target,targettext,time);
        } else {
            if (texttyped !== targettext) {
                $(target).text(targettext);
            }
            textcount = 0;
            texttyped = "";
        }
    },time);
}

function setServiceMenu(targetoption){
  var startServices = servicescene.scrollOffset();
  var endServices = servicescene.scrollOffset() + servicescene.duration();
  buttonTakeOver = true;
  changeServicesMenu(targetoption);
  var perSection = (endServices - startServices)/4;
  switch(targetoption){
    case 1:window.scrollTo(0,startServices+10);break;
    case 2:window.scrollTo(0,startServices+perSection+10);break;
    case 3:window.scrollTo(0,startServices+perSection*2+10);break;
    case 4:window.scrollTo(0,startServices+perSection*3+10);break;
  }
  setTimeout(function(){
    buttonTakeOver = false;
  },50);
}

function changeServicesMenu(targetoption) {
    $(".service-desc-l1").addClass("grey-out");
    $(".service-desc-l2").addClass("grey-out");
    $(".service-desc-l3").addClass("grey-out");
    $(".service-desc-l4").addClass("grey-out");
    $(".service-desc-l1").removeClass("servicemenuoptionactive");
    $(".service-desc-l2").removeClass("servicemenuoptionactive");
    $(".service-desc-l3").removeClass("servicemenuoptionactive");
    $(".service-desc-l4").removeClass("servicemenuoptionactive");
    switch(targetoption){
      case 1:
        $(".services-l2").removeClass("fadeIn");
        $(".services-l3").removeClass("fadeIn");
        $(".services-l4").removeClass("fadeIn");
        $(".service-desc-l1").removeClass("grey-out");
        $(".services-l1").addClass("fadeIn");
        $(".service-desc-l1").addClass("servicemenuoptionactive");
        break;
      case 2:
        $(".services-l1").removeClass("fadeIn");
        $(".services-l3").removeClass("fadeIn");
        $(".services-l4").removeClass("fadeIn");
        $(".service-desc-l2").removeClass("grey-out");
        $(".services-l2").addClass("fadeIn");
        $(".service-desc-l2").addClass("servicemenuoptionactive");
        break;
      case 3:
        $(".services-l1").removeClass("fadeIn");
        $(".services-l2").removeClass("fadeIn");
        $(".services-l4").removeClass("fadeIn");
        $(".service-desc-l3").removeClass("grey-out");
        $(".services-l3").addClass("fadeIn");
        $(".service-desc-l3").addClass("servicemenuoptionactive");
        break;
      case 4:
        $(".services-l1").removeClass("fadeIn");
        $(".services-l2").removeClass("fadeIn");
        $(".services-l3").removeClass("fadeIn");
        $(".service-desc-l4").removeClass("grey-out");
        $(".services-l4").addClass("fadeIn");
        $(".service-desc-l4").addClass("servicemenuoptionactive");
        break;
    }
}

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

function latestClicked(clicked){
  var extraHTML = "";
  switch(clicked){
    case 0:
      extraHTML = "?post=10112018";
    break;
    case 1:
      extraHTML = "?post=22092018";
    break;
  }
  window.location.assign('newsroom.html' + extraHTML);
}
