document.addEventListener("DOMContentLoaded", function() {

    const hasSeenPopup = document.cookie.includes("popupShown=true");
    if (!hasSeenPopup) {
        document.getElementById("popup").style.display = "block";
    }

    
    document.getElementById("close-popup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
        document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });

    const subscriptionForm = document.getElementById("subscription-form");

    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userEmail = subscriptionForm.querySelector("input[type='email']").value;

        document.getElementById("popup").style.display = "none";
        document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });
});