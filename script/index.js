var scrollPosition = "";
var totalHeight = "";
var initAbout = true;
var initServices = true;
var initUpdates = true;
var serviceslocked = false;
var buttonTakeOver = false;

var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

var updatesscene;
$(".updates").each(function() {
    updatesscene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '100%'
    })
    .setPin(this)
    .addTo(ctrl);
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
var startServices = servicescene.scrollOffset();
var endServices = servicescene.scrollOffset() + servicescene.duration();
var contactscene;
$(".contact").each(function() {
    contactscene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '100%'
    })
    .setPin(this)
    .addTo(ctrl);
});

$(window).on("load", function() {
    scrollPosition = $(window).scrollTop();
    var progress = scrollPosition / totalHeight * 100;
    $(".progressbar-thumb").css("height",progress + "%");
    totalHeight = $(".about").height() + $(".slogan").height() + $(".updates").height() + $(".services").height() + $(".contact").height() + $(".footer").height();
    inputText(".home-title-a","SETTING A",40);
    setTimeout(function() {
        inputText(".home-title-b","NEW FRONTIER",40);
        setTimeout(function() {
            $(".home-desc").addClass("fadeIn");
        },1000);
    },600);
});

$(window).on("scroll", function() {
    scrollPosition = $(window).scrollTop();
    var progress = scrollPosition / totalHeight * 100;
    $(".progressbar-thumb").css("height",progress + "%");
    if ((scrollPosition >= $(".about").offset().top / 2) && initAbout) {
      setTimeout(function() {
          $(".about-l3").css("z-index",5);
          $(".about-l3").addClass("fadeIn");
      },300);
      initAbout = false;
    }
    if ((scrollPosition >= $(".updates").offset().top / 2) && initUpdates) {
      automatedUpdatesSlide();
      nextUpdatesSlide();
      initUpdates = false;
    }

    if ((scrollPosition >= $(".services").offset().top / 2) && initServices) {
      changeServicesMenu(1);
      initServices = false;
    }
    // //About section listener
    if(!buttonTakeOver){
    //   if(scrollPosition >= startAbout){
    //     var perSection = (endAbout - startAbout)/4
    //     if(scrollPosition >= startAbout + perSection*1){
    //       if(scrollPosition >= startAbout + perSection*2){
    //         if(scrollPosition >= startAbout + perSection*3){
    //           changeAboutMenu(4);
    //         }
    //         else {changeAboutMenu(3);}
    //       }
    //       else { changeAboutMenu(2); }
    //     }
    //     else { changeAboutMenu(1); }
    //   }
      //Services section listener
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
  buttonTakeOver = true;
  changeServicesMenu(targetoption);
  var perSection = (endServices - startServices)/4;
  switch(targetoption){
    case 1:window.scrollTo(0,startServices+10);break;
    case 2:window.scrollTo(0,startServices+perSection+10);break;
    case 3:window.scrollTo(0,startServices+perSection*2+10);break;
    case 3:window.scrollTo(0,startServices+perSection*3+10);break;
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
        setTimeout(function() {
            $(".services-l1").addClass("fadeIn");
            $(".service-desc-l1").addClass("servicemenuoptionactive");
        },300);
        break;
      case 2:
        $(".services-l1").removeClass("fadeIn");
        $(".services-l3").removeClass("fadeIn");
        $(".services-l4").removeClass("fadeIn");
        $(".service-desc-l2").removeClass("grey-out");
        setTimeout(function() {
            $(".services-l2").addClass("fadeIn");
            $(".service-desc-l2").addClass("servicemenuoptionactive");
        },300);
        break;
      case 3:
        $(".services-l1").removeClass("fadeIn");
        $(".services-l2").removeClass("fadeIn");
        $(".services-l4").removeClass("fadeIn");
        $(".service-desc-l3").removeClass("grey-out");
        setTimeout(function() {
            $(".services-l3").addClass("fadeIn");
            $(".service-desc-l3").addClass("servicemenuoptionactive");
        },300);
        break;
      case 4:
        $(".services-l1").removeClass("fadeIn");
        $(".services-l2").removeClass("fadeIn");
        $(".services-l3").removeClass("fadeIn");
        $(".service-desc-l4").removeClass("grey-out");
        setTimeout(function() {
            $(".services-l4").addClass("fadeIn");
            $(".service-desc-l4").addClass("servicemenuoptionactive");
        },300);
        break;
    }
}

var updateindex = 0;
var updatetitle = ["ACTIVITY","COURSES","INFO"];
var updatedescription = activities;
function nextUpdatesSlide() {
    updatedescription = activities;
    if (updateindex == 2) {
        updateindex = 0;
        $(".updates-1").css("z-index",5);
        $(".updates-2").css("z-index",4);
        $(".updates-3").css("z-index",4);
        $(".updates-1").addClass("updates-expand");
        setTimeout(function() {
            $(".updates-2").removeClass("updates-expand");
            $(".updates-3").removeClass("updates-expand");
        },800);
    }
    else if (updateindex == 0) {
        updateindex = 1;
        $(".updates-2").css("z-index",5);
        $(".updates-1").css("z-index",4);
        $(".updates-3").css("z-index",4);
        $(".updates-2").addClass("updates-expand");
        setTimeout(function() {
            $(".updates-1").removeClass("updates-expand");
            $(".updates-3").removeClass("updates-expand");
        },800);
    }
    else if (updateindex == 1) {
        updateindex = 2;
        $(".updates-3").css("z-index",5);
        $(".updates-1").css("z-index",4);
        $(".updates-2").css("z-index",4);
        $(".updates-3").addClass("updates-expand");
        setTimeout(function() {
            $(".updates-1").removeClass("updates-expand");
            $(".updates-2").removeClass("updates-expand");
        },800);
    }
    inputText(".updates-title-b",updatetitle[updateindex],40);
    inputText(".updates-desc-box-content",updatedescription[updateindex],1);
}

function automatedUpdatesSlide() {
    setInterval(function() {
        nextUpdatesSlide();
    },5000);
}
