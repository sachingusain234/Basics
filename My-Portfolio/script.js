let text = new Typed('#name',{
    strings:["SACHIN","DEVELOPER","STUDENT","CODER"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
    
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionId = this.getAttribute('href'); // Get section id from href attribute
            const targetSection = document.querySelector(sectionId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scroll to the top of the target element
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementsByClassName('contact');
    const submitButton = document.getElementById('Msg');

    submitButton.addEventListener('click', function() {
        const name = document.getElementById('Your-name').value.trim();
        const email = document.getElementById('Your-email').value.trim();
        const phone = document.getElementById('Your-phone').value.trim();
        const message = document.getElementById('text-area').value.trim();

        if (name === '' || email === '' || phone === '' || message === '') {
            alert("Fill all the details !!");
        } else {
            alert("Message sent successfully");
            form.reset(); // Reset the form after successful submission
        }
    });
});


