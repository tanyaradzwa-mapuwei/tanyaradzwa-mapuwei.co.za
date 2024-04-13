//This is for all the scripts
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-bar ul li a');
const navBar = document.querySelector('.nav-bar');
const lines = document.querySelectorAll('.line');

// Add click event listener to the hamburger menu
hamburger.onclick = function() {
    navBar.classList.toggle('active');
    lines.forEach(line => line.classList.toggle('cross'));
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
        navBar.classList.remove('active');
        lines.forEach(line => line.classList.remove('cross'));
    });
 });

 // Add scroll event listener to make the navigation bar stick
 window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('sticky');
    }
    else
    {
        header.classList.remove('sticky');
    }
});


/*Typed js*/
const typed = new Typed('.multiple-text',{
    strings: ['Welcome to my world!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDalay: 1000,
    loop: true
});