document.addEventListener("DOMContentLoaded", function() {
    // Toggle Menu Functionality
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.querySelector('.menu-icon'); // Make sure to have the correct selector for the menu icon

    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            if (navLinks.style.display === 'block') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'block';
            }
        });
    }

    // FAQ Questions Handling
    const faqQuestions = document.querySelectorAll(".faq-question");
    if (faqQuestions.length === 0) {
        console.error("No FAQ questions found.");
        return; // Exit if no questions are found
    }

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function() {
            this.classList.toggle("active");
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Gather form data (optional)
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            // Show alert (for testing purposes)
            alert(`Thank you, ${name}! Your message has been sent.`);

            // Optionally, you can clear the form or send data to a server
            contactForm.reset();
        });
    }

    // Tawk.to Chat Integration
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/627c7345b0d10b6f3e71cc77/1g2r24iao';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0); // Insert the script before the first script element
    })();

    // Optional Blog Page Logging
    console.log("Blog page loaded.");
});
