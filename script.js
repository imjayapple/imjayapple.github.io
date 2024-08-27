// "Let's Connect" button in the main intro card
// function: smoothly scroll down to contact form upon user click
document.addEventListener('DOMContentLoaded', () => {
    const connectBtn = document.getElementById('connect-btn');
    const contactSection = document.getElementById('contact');

    connectBtn.addEventListener('click', () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project "Card" Gallery
// function: on mouseEnter, scale up/magnify the desired card
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

// Contact Form
// function: collect name, email, and message. Error handling "please fill out all fields"
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Here you would typically send the form data to a server
            // For this example, we'll just simulate a successful submission
            console.log('Form Data:', {name, email, messaage});
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = var(--neon-purple);
            form.reset();

            // Clear the success message after 3 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 3000);
        } else {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = var(--neon-red);
        }
    });
});