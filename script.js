document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product-card button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });

    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        contactForm.reset();
    });
});
