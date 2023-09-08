

// Revealing nav with ScrollReveal 

ScrollReveal().reveal('.header', {delay: 500});
const sr = ScrollReveal ({
    distance: '30px',
    duration:2000,
    reset: true,
})

//Left and right revealing animations

sr.reveal('.hero-text', {delay:200, origin:'left'});
sr.reveal('.hero-img', {delay:200, origin:'right'});

//Animation from top to bottom

sr.reveal(' .about-section, .menu, .contact-form,  .footer', {delay:200, origin:'top'});

//nav toggle - select button and links

const navToggle = document.querySelector("#navToggle")
const nav =document.querySelector("#nav-links");

// Add event listener


navToggle.addEventListener("click", () =>{
    nav.classList.toggle('nav-open');
})
