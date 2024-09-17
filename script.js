// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.getElementById('contact');
    const contactLink = document.querySelector('.contact-link');
    const homeLink = document.querySelector('.home-link');

    // Scroll event to show contact section and highlight nav
    window.addEventListener('scroll', () => {
        const contactPosition = contactSection.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > contactPosition) {
            contactSection.classList.add('show');
            contactLink.classList.add('active');
            homeLink.classList.remove('active');
        } else {
            contactSection.classList.remove('show');
            contactLink.classList.remove('active');
            homeLink.classList.add('active');
        }
    });

    // Click event to smooth scroll to contact section
    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        contactSection.scrollIntoView({ behavior: 'smooth' });
        contactSection.classList.add('show'); // Ensure contact section is visible
        contactLink.classList.add('active');
        homeLink.classList.remove('active');
    });
});
