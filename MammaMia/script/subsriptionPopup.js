document.addEventListener("DOMContentLoaded", function() {

    const hasSeenPopup = document.cookie.includes("popupShown=true");

    //Checks if the user has seen the popup before
    if (!hasSeenPopup) {
        document.getElementById("popup").style.display = "block";
    }

    //Removes the popup is the user closes the popup and adds a cookie
    document.getElementById("close-popup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
        document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });

    const subscriptionForm = document.getElementById("subscription-form");

    //Submits the email, currently nothing is done with the user email
    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userEmail = subscriptionForm.querySelector("input[type='email']").value;

        document.getElementById("popup").style.display = "none";
        document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });
});