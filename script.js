const navLinks = document.querySelector('.navLinks');
const hamburger = document.querySelector('.hamburger'); 

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})