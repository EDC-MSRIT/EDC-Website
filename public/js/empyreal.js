//ScrollReveal Animations here --------------------------------------------------------------------------------------------------------------

let slideFromRight = {
    origin: 'right',
    distance: '50%',
    opacity: 0,
    duration: 1000,
    easing: 'ease',
    delay: 600
}
ScrollReveal().reveal('.slide-enter-right', slideFromRight);

let slideFromRight2 = {
  origin: 'right',
  distance: '50%',
  opacity: 0,
  duration: 1000,
  easing: 'ease',
  delay: 800
}
ScrollReveal().reveal('.slide-enter-right2', slideFromRight2);

let slideFromBottom = {
    origin: 'bottom',
    distance: '50%',
    opacity: 0,
    duration: 1000,
    easing: 'ease',
    delay: 400
}
ScrollReveal().reveal('.slide-enter-bottom', slideFromBottom);

let slideFromBottom2 = {
  origin: 'bottom',
  distance: '50%',
  opacity: 0,
  duration: 1000,
  easing: 'ease',
  delay: 1000
}
ScrollReveal().reveal('.slide-enter-bottom2', slideFromBottom2);

let slideFromLeft = {
  origin: 'left',
  distance: '50%',
  opacity: 0,
  duration: 1000,
  easing: 'ease',
  delay: 1000
}
ScrollReveal().reveal('.slide-enter-left', slideFromLeft);

let slideFromLeft2 = {
  origin: 'left',
  distance: '50%',
  opacity: 0,
  duration: 1000,
  easing: 'ease',
  delay: 400
}
ScrollReveal().reveal('.slide-enter-left2', slideFromLeft2);


//header animations start-----------------------------------------------------------

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const navbar = document.querySelector('.delay-navbar');

const tl = new TimelineMax();

tl.fromTo(
    hero, 
    1.2, 
    {height: "0%"}, 
    {height: "80%", ease: Power2.easeInOut}
).fromTo(
    hero, 
    1.4, 
    {width: "100%"}, 
    {width: "80%", ease: Power2.easeInOut},
).fromTo(
    slider, 
    1.4,
    {x: "-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.2" 
).fromTo(
    navbar, 
    0.7, 
    {opacity: 0, x:30 },
    {opacity: 1, x: 0},
    "-=0.5"
)

// E-Fiesta Animations Here -------------------------------------------------------------------------------------------------------------
var swiper = new Swiper('.e-fiesta-events-swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
});

// My Story Sessions Animations here -----------------------------------------------------------------------------------------------------

var swiper = new Swiper('.my-story-session-swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
});
