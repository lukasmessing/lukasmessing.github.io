var navLinks = document.querySelector('.navLinks');
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log("clicked");
});