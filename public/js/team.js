console.log('Hello')
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
