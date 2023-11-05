
// A function to make a booking confirmation textbox visible to simulate an actual reservation has been placed.
function confirmationValidation() {    
    let confirmationMessage = document.getElementById('confirmation-message');
    let form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the submit button from refreshing the page.
    })

    if (form.checkValidity()) {
        confirmationMessage.style.display = 'block'; // Make the confirmation textbox visible.
    }
}

// A function to keep the date picker/calendar on the current date so the user cannot choose a date prior to the current date, and for ease of use have the current date as a placeholder so the user does not need to change the date if they are booking for the current date.
function getTodaysDate() {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd < 10) {dd = '0' + dd} // If the day is less than 10, add a 0 to the string for formatting
    if (mm < 10) {mm = '0' + mm} // Same as above, for month

    let today = yyyy + '-' + mm + '-' + dd // Set the string to the correct format

    let inputField = document.getElementById('booking-date');
    inputField.setAttribute('min', today); // Set the attribute 'min' to the current date
    inputField.setAttribute('value', today); // Set the attribute 'value' to the current date
}

getTodaysDate();