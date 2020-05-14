console.log("Linked");

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
