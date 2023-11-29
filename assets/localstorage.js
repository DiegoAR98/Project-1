// park-visit.js

// Function to save the last visited park
function saveLastVisitedPark(parkFileName) {
    localStorage.setItem('lastVisitedPark', parkFileName);
  }
  
  // Function to redirect to the last visited park
  function redirectToLastVisitedPark() {
    const lastVisitedPark = localStorage.getItem('lastVisitedPark');
    if (lastVisitedPark && window.location.href.indexOf(lastVisitedPark) === -1) {
      window.location.href = lastVisitedPark;
    }
  }
  
  // Event listeners for park links
  document.addEventListener('DOMContentLoaded', (event) => {
    const parkLinks = document.querySelectorAll('.park-link');
    
    parkLinks.forEach(link => {
      link.addEventListener('click', function() {
        saveLastVisitedPark(this.getAttribute('href'));
      });
    });
  
    redirectToLastVisitedPark();
  });
  