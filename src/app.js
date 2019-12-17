var slideUp = {
    delay: 500, 
    reset: true, 
    distance: '250%',
    origin: 'bottom'
}
var slideDown = {
    delay: 500, 
    reset: true, 
    distance: '150%',
    origin: 'top'
}
var slideLeft ={
    delay: 500, 
    reset: true, 
    distance: '150%',
    origin: 'left'
}
var slideRight ={
    delay: 500, 
    reset: true, 
    distance: '150%',
    origin: 'right'
}
ScrollReveal().reveal('.icons',{delay: 1000});
ScrollReveal().reveal('.logo',{delay: 1000, interval: 16});
ScrollReveal().reveal('.slideDown', slideDown);
ScrollReveal().reveal('.slideUp', slideUp);
ScrollReveal().reveal('.b1', {delay: 1500, reset: true});
ScrollReveal().reveal('.slideLeft', slideLeft);
ScrollReveal().reveal('.slideRight', slideRight);


// window.onload = function(){
//     var loader = document.getElementById('loader')
//     loader.remove();
// }
let $botonCheck = document.getElementById('hamb');
let $header  = document.getElementById('header');
let $textos = document.getElementById('textos');
let $enlaces = document.getElementById('enlaces');
let contadorCheck = 0;
$botonCheck.addEventListener('click',function() {
    if(contadorCheck == 0){
        $header.classList.remove('back-uno') 
        $header.classList.add('back-dos')
        $textos.classList.remove('textos') 
        $textos.classList.add('textos-out')
        $enlaces.className = ('enlaces dos')
        contadorCheck++
    }else if(contadorCheck == 1){
        $header.classList.remove('back-dos')
        $header.classList.add('back-uno')
        $textos.classList.remove('textos-out') 
        $textos.classList.add('textos')
        $enlaces.classList.remove('dos')
    $enlaces.className = ('enlaces uno')
        contadorCheck--
    }
})
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
hamburger.classList.toggle("is-active");
// Do something else, like open/close menu
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});