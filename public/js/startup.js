// Prealoder---------------------------------------------------------------------------------------------------------------------------------
function prealoader() {
  if ($("#preloader").length) {
    $("#preloader").fadeOut("fast", "linear"); // will first fade out the loading animation
    $("#loader-wrapper").fadeOut("fast", "linear"); // will fade out the loader container
    $("body").delay(350).css({ "overflow-y": "visible" }); // will enable the verital scroll on body
    $("#mainPage").css({ visibility: "initial" });
  }
}

// Window load function
jQuery(window).on("load", function () {
  (function ($) {
    prealoader();
    delayNavbar();
  })(jQuery);
});

function delayNavbar() {
  $("#EDCNav").css({ opacity: "1", transform: "translateX(0)" });
}

var slideFromBottom = {
  delay: 200,
  distance: "50%",
  origin: "bottom",
  opacity: 0,  
  duration: 1000,
  easing: "ease",
};

ScrollReveal().reveal(".slide-enter-bottom", slideFromBottom);

var scaleUpLogo = {
  delay: 500,
  scale: 0.5,
  opacity: 0,
  easing: "ease",
};
ScrollReveal().reveal(".enter-logo", scaleUpLogo);