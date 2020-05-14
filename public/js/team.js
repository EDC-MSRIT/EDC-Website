console.log("Linked");

// Prealoder---------------------------------------------------------------------------------------------------------------------------------
function prealoader() {
  if ($("#preloader").length) {
    $("#preloader").fadeOut("fast", "linear"); // will first fade out the loading animation
    $("#loader-wrapper").fadeOut("fast", "linear"); // will fade out the loader container
    $("body").delay(350).css({ "overflow-y": "visible" }); // will enable the verital scroll on body
    $("#mainPage").css({ visibility: "initial" }); // will reveal the main page
  }
}

function delayNavbar() {
  $("#EDCNav").css({ opacity: "1", transform: "translateX(0)" });
}

// Window load function
jQuery(window).on("load", function () {
  (function ($) {
    prealoader();
    delayNavbar();
  })(jQuery);
});

// Prealoder Ends---------------------------------------------------------------------------------------------------------------------------------
var slideFromLeft = {
  delay: 500,
  distance: "50%",
  origin: "left",
  opacity: 0,
  duration: 1000,
  easing: "ease",
};

var slideFromRight = {
  delay: 500,
  distance: "50%",
  origin: "right",
  opacity: 0,
  duration: 1000,
  easing: "ease",
};

var slideFromBottom = {
  delay: 500,
  distance: "50%",
  origin: "bottom",
  opacity: 0,
  duration: 1000,
  easing: "ease",
};

ScrollReveal().reveal(".slide-enter-left", slideFromLeft);
ScrollReveal().reveal(".slide-enter-right", slideFromRight);
ScrollReveal().reveal(".slide-enter-bottom", slideFromBottom);
