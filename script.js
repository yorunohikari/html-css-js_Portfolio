function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
} 

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Add an event listener to show/hide the arrow based on the scroll position
  window.addEventListener('scroll', function() {
    var scrollToTopArrow = document.getElementById('scrollToTopArrow');
    if (window.scrollY > 700) { // Adjust the scroll position at which the arrow should appear
      scrollToTopArrow.classList.add('show');
    } else {
      scrollToTopArrow.classList.remove('show');
    }
  });