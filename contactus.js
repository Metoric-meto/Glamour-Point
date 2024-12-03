// contactus.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('customerSupportForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        // Send form data to the server
        fetch('http://localhost:8080/submitAppointment', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the server response (success or error)
            console.log(data);
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    });
});
