// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! Your message has been sent.`);
  document.getElementById('contactForm').reset();
});

// JavaScript to toggle the mobile menu
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
}

