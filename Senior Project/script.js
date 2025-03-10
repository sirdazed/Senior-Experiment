

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const emailInput = document.getElementById("emailInput");
    const closeButton = document.getElementById("closePopup");

    if (popup && overlay) {
        overlay.style.display = "block"; // Show popup on page load
        document.body.classList.add("fixed-background"); // Disable scrolling
    }

    // Close popup when email is entered
    emailInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            overlay.style.display = "none";
            document.body.classList.remove("fixed-background");
        }
    });

    // Replace popup content when close button is clicked
    closeButton.addEventListener("click", function () {
        popup.innerHTML = `
            <div id="exit-message">
                <span id="smallClose">&times;</span>
                <h1>We are sad to see you go!</h1>
                <p>You can sign up anytime</p>
            </div>
        `;

        // Add event listener for small close button
        document.getElementById("smallClose").addEventListener("click", function () {
            overlay.style.display = "none";
            document.body.classList.remove("fixed-background");
        });
    });
});
