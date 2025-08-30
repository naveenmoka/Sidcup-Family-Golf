// Responsive Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Show the custom popup
function showPopup(message) {
  const popup = document.getElementById("customPopup");
  const popupMessage = document.getElementById("popupMessage");

  popupMessage.innerText = message;
  popup.style.display = "flex";
}

// Close the custom popup
function closePopup() {
  document.getElementById("customPopup").style.display = "none";
}

// Contact Form Submit
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  showPopup("Thank you for contacting us! We'll get back to you soon.");
  e.target.reset();
});
