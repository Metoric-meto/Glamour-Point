document.getElementById('joinForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Gather form data
    const ownerName = document.getElementById('ownerName').value;
    const salonName = document.getElementById('salonName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple form validation (optional)
    if (ownerName && salonName && email && phone && message) {
        alert(`Thank you, ${ownerName}! Your submission for "${salonName}" has been received.`);
        // Here, you can send the data to a server or process it further
    } else {
        alert('Please fill out all fields.');
    }
});
