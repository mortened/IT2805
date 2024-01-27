
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
    let mm = date.getMonth() + 1; // Add one because month is zero-indexed
    let yyyy = date.getFullYear();

    if (dd < 10) {dd = '0' + dd} // If the day is less than 10, add a 0 to the string for formatting
    if (mm < 10) {mm = '0' + mm} // Same as above, for month

    let today = yyyy + '-' + mm + '-' + dd // Set the string to the correct format

    let inputField = document.getElementById('booking-date');
    inputField.setAttribute('min', today); // Set the attribute 'min' to the current date
    inputField.setAttribute('value', today); // Set the attribute 'value' to the current date
}

// Since the opening hours changes based on what day it is, I have implemented functionality which changes the avaliable times based on the day of the week. The following functions all contribute to implementing this:
function changeBookingTimeBasedOnDay() {
    // First when the date is updated, the list of times is reset to be empty so that we do not get duplicate times.
    resetBookingTimes();
    
    // We get the current chosen date from the input.
    let chosenDay = new Date(document.getElementById('booking-date').value);
    if (range(chosenDay.getDay(), 1, 4)) { // Check whether the day is in Mon-Thur or Fri-Sun.
        // If it is a weekday (Mon-Thur), add the following times to the list of avaliable times.
        timesList = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
        addOptionsToBookingTime(timesList);
    } else {
        // If it is a weekend (Fri-Sun), add the following times to the list of avaliable times.
        timesList = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
        addOptionsToBookingTime(timesList);
    }
}

// Function to check whether a value is included in a range.
function range(num, min, max) {
    return num >= min && num <= max;
}

// Function which adds the times to the list in the HTML document. Takes in a list of times.
function addOptionsToBookingTime(timesList) {
    // Go through the list and add the times as an option element to the #booking-time element with attribute 'value' set to an empty string to avoid errors.
    for (let i = 0; i < timesList.length; i++) {
        let option = document.createElement('option');
        option.value = '';
        option.appendChild(document.createTextNode(timesList[i]));
        document.getElementById('booking-time').appendChild(option);
    }
}

// Function which removes the times from the #booking-time element.
function resetBookingTimes() {
    // Create a list of all the children of #booking-time.
    let parent = document.getElementById('booking-time');
    let children = parent.children;

    // Loop through all the children and remove all from bottom-up except the first child (the empty option).
    for (i = children.length - 1; i > 0; i--) {
        parent.removeChild(children[i]);
    }
}

// Initialize the default day (today).
getTodaysDate();

// Initialize the times in #booking-time to the default day.
changeBookingTimeBasedOnDay();

// Listen to changes in the #booking-date input and update the booking times based on that day.
document.getElementById('booking-date').addEventListener('change', changeBookingTimeBasedOnDay);