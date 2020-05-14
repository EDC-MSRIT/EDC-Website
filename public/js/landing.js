// Prealoder---------------------------------------------------------------------------------------------------------------------------------
function prealoader() {
    if ($("#preloader").length) {
      $("#preloader").fadeOut("fast", "linear"); // will first fade out the loading animation
      $("#loader-wrapper").fadeOut("fast", "linear"); // will fade out the loader container
      $("body").delay(350).css({ "overflow-y": "visible" }); // will enable the verital scroll on body // will reveal the main page
      $('html').css({'height':'initial'})
      $("#mainPage").css({"visibility":"initial"})
    }
  }
  
  // Window load function
  jQuery(window).on("load", function () {
    (function ($) {
      prealoader();
      animateMasthead();
    })(jQuery);
  });

  // Prealoder Ends---------------------------------------------------------------------------------------------------------------------------------

function animateMasthead(){
  
  $('.masthead-content .image').css({
    "opacity":"1",
    "transform":"translateY(0)"
  })
  
}
var slideFromRight = {
    delay:500,
    distance: '50%',
    origin: 'right',
    opacity: 0
}


var scaleUpLogo1 = {
    delay:600,
    scale:0.5,
    opacity: 0
}

var scaleUpLogo2 = {
    delay:500,
    scale:0.5,
    opacity: 0
}

var scaleUpLogo3 = {
    delay:700,
    scale:0.5,
    opacity: 0
}

var scaleUpTeam = {
    delay:500,
    scale:0.5,
    opacity: 0
}

ScrollReveal().reveal('#myCarousel',slideFromRight)
ScrollReveal().reveal(".logo-1",scaleUpLogo1)
ScrollReveal().reveal(".logo-2",scaleUpLogo2)
ScrollReveal().reveal(".logo-3",scaleUpLogo3)
ScrollReveal().reveal('.rounded-circle',scaleUpTeam)
