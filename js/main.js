document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("registration").addEventListener("click", function () {
        document.getElementById("registration-form").classList.toggle("active");
    });
    document.querySelector('a[href="events.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('loading-screen').style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'events.html';
        }, 1000); // Delay for effect
    });
    document.addEventListener('DOMContentLoaded', function () {
        const eventsLink = document.getElementById('events-link');
        if (window.location.pathname.includes('events.html')) {
            eventsLink.href = 'index.html'; // Redirect back to index.html
            eventsLink.textContent = 'Home'; // Update link text, if necessary
        } else {
            eventsLink.href = 'events.html'; // Default behavior
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        const currentPage = document.getElementById('current-page');
        if (currentPage) {
            currentPage.classList.add('active-link');
        }
    });
    document.querySelector('.registration-cta').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('registration-form').style.display = 'flex'; // Adjust ID as necessary
    });
    // Open registration form when button is clicked
    document.querySelector('.registration-cta').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('registration-form').style.display = 'flex';
    });

    // Close form when the close button is clicked
    document.querySelector('.close-btn').addEventListener('click', function () {
        document.getElementById('registration-form').style.display = 'none';
    });
    // Event Listener for "Register Now" Button
    document.querySelector('.register-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const registrationForm = document.querySelector('.registration-form');
        registrationForm.style.display = 'block'; // Make the form visible
        registrationForm.style.transform = 'translateX(0)'; // Slide the form into view
        registrationForm.style.transition = 'transform 0.5s ease'; // Smooth animation
    });
    document.querySelector('.register-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        console.log('Register button clicked');
    
        const registrationForm = document.querySelector('.registration-form');
        if (registrationForm) {
        console.log('Form found:', registrationForm);
        registrationForm.style.display = 'block'; // Make the form visible
        registrationForm.style.transform = 'translateX(0)'; // Slide the form into view
        registrationForm.style.transition = 'transform 0.5s ease'; // Smooth animation
        } else {
        console.log('Form not found');
        }
    });
});
