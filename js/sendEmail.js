 window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_l4cudia", "template_1css9z9" /* "template_zrbfpi8" */, this)
            .then(() => {
                alert('Email sent');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}