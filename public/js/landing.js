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
