$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000, // Temps entre les slides en millisecondes
        pause: "hover" // Pause le carousel lorsque la souris est au-dessus
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Message envoyé avec succès !\n\nEmail: ${email}\nMessage: ${message}`);
        
        // Réinitialiser le formulaire après soumission
        contactForm.reset();
    });
});
