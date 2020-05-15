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
    var slideFromLeft = {
      distance: "50%",
      origin: "left",
      opacity: 0,
      duration: 1000,
      easing: "ease",
    };
    
    var slideFromRight = {
      distance: "50%",
      origin: "right",
      opacity: 0,
      duration: 1000,
      easing: "ease",
    };
    
    var slideFromBottom = {
      distance: "50%",
      origin: "bottom",
      opacity: 0,
      duration: 1000,
      easing: "ease",
    };
    var windowWidth = $(window).width()
    ScrollReveal().reveal(".slide-enter-left", windowWidth>650?slideFromLeft:slideFromBottom);
    ScrollReveal().reveal(".slide-enter-right", windowWidth>650?slideFromRight:slideFromBottom);
    ScrollReveal().reveal(".slide-enter-bottom", slideFromBottom);
    
  
  })(jQuery);
});

// Prealoder Ends---------------------------------------------------------------------------------------------------------------------------------
