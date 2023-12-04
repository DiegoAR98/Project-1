// Function to save the last visited park
function saveLastVisitedPark(parkFileName) {
    localStorage.setItem('lastVisitedPark', parkFileName);
}

// Function to redirect to the last visited park
function redirectToLastVisitedPark() {
    var lastVisitedPark = localStorage.getItem('lastVisitedPark');
    var basePath = '/Project-1/'; // Base path of your project

    console.log("Current pathname:", window.location.pathname); // Debugging output
    console.log("Last visited park:", lastVisitedPark); // Debugging output
    console.log("Redirecting to:", basePath + lastVisitedPark); // Debugging output

    // Check if the current page is the main page of your project
    if (lastVisitedPark && (window.location.pathname === basePath || window.location.pathname === basePath + 'index.html')) {
        window.location.href = basePath + lastVisitedPark;
    }
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    redirectToLastVisitedPark();

    // Add event listeners to park links
    var parkLinks = document.querySelectorAll('.dropdown-content a');
    parkLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            saveLastVisitedPark(this.getAttribute('href'));
        });
    });

    // Optional: Reset last visited park if 'Return to Main Page' link is clicked
    var returnMainLink = document.querySelector('.return-main-link');
    if (returnMainLink) {
        returnMainLink.addEventListener('click', function() {
            localStorage.removeItem('lastVisitedPark');
        });
    }
});
