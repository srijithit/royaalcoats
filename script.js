// Script for Royaal Coats Website

document.addEventListener('DOMContentLoaded', () => {
    console.log('Royaal Coats website loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



// Form Submission Handler (Mock)
const contactForm = document.querySelector('.contact-form button');
if (contactForm) {
    contactForm.addEventListener('click', (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        let valid = true;
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value) {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (valid) {
            alert('Thank you for your message! We will contact you soon.');
            inputs.forEach(input => input.value = '');
        } else {
            alert('Please fill in all required fields.');
        }
    });
}
