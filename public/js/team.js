// Prealoder---------------------------------------------------------------------------------------------------------------------------------
function prealoader() {
    if ($("#preloader").length) {
      $("#preloader").fadeOut("fast", "linear"); // will first fade out the loading animation
      $("#loader-wrapper").fadeOut("fast", "linear"); // will fade out the loader container
      $("body").delay(350).css({ "overflow-y": "visible" }); // will enable the verital scroll on body
      $("#mainPage").css({'visibility':'initial'}) // will reveal the main page
    }
  }
  
  // Window load function
  jQuery(window).on("load", function () {
    (function ($) {
      prealoader();
    })(jQuery);
  });

  // Prealoder Ends---------------------------------------------------------------------------------------------------------------------------------
var slideFromLeft = {
    delay:200,
    distance: '50%',
    origin: 'left',
    opacity: 0
};

var slideFromRight = {
    delay:200,
    distance: '50%',
    origin: 'right',
    opacity: 0
};


var slideFromBottom = {
    delay:200,
    distance: '50%',
    origin: 'bottom',
    opacity: 0
};

ScrollReveal().reveal('.team__left',slideFromLeft)
ScrollReveal().reveal('.team__right',slideFromRight)
ScrollReveal().reveal('.team__middle',slideFromBottom)
