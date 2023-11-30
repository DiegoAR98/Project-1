// Function to save the last visited park
function saveLastVisitedPark(parkFileName) {
    localStorage.setItem('lastVisitedPark', parkFileName);
}

// Function to redirect to the last visited park
function redirectToLastVisitedPark() {
    var lastVisitedPark = localStorage.getItem('lastVisitedPark');
    // Check if the current page is not the last visited page and is the main page
    if (lastVisitedPark && window.location.pathname.endsWith('index.html')) {
        window.location.href = lastVisitedPark;
    }
}

// Function to reset the last visited park when returning to the main page
function resetLastVisitedPark() {
    localStorage.removeItem('lastVisitedPark');
}

document.addEventListener('DOMContentLoaded', function () {
    var parkLinks = document.querySelectorAll('.park-link');
    
    parkLinks.forEach(link => {
        link.addEventListener('click', function() {
            saveLastVisitedPark(this.getAttribute('href'));
        });
    });

    // Reset last visited park if the 'return to main page' link is clicked
    var returnMainLink = document.querySelector('.return-main-link');
    if (returnMainLink) {
        returnMainLink.addEventListener('click', resetLastVisitedPark);
    }
  
    redirectToLastVisitedPark();
});
