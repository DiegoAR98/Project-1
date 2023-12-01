// Function to save the last visited park
function saveLastVisitedPark(parkFileName) {
    localStorage.setItem('lastVisitedPark', parkFileName);
}

// Function to redirect to the last visited park
function redirectToLastVisitedPark() {
    var lastVisitedPark = localStorage.getItem('lastVisitedPark');
    // Check if the last visited park is set and the current page is index.html
    if (lastVisitedPark && window.location.pathname.endsWith('index.html')) {
        window.location.href = lastVisitedPark;
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
