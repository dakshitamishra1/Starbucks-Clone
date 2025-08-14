// Navbar Hamburger Toggle
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);

// Sign In Button Functionality
const signInButtons = document.querySelectorAll('.btn.btn-dark-outline');
signInButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = "signin.html"; // Replace with your actual Sign In page
  });
});

// Join Now Button Functionality
const joinButtons = document.querySelectorAll('.btn.btn-dark');
joinButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = "join.html"; // Replace with your actual Join Now page
  });
});

// Find a Store Functionality
const findStoreLinks = document.querySelectorAll('a[href="#"] span');
findStoreLinks.forEach(span => {
  if (span.textContent.includes('Find a store')) {
    span.parentElement.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "store-locator.html"; // Replace with your store locator page
    });
  }
});

// Order Now Buttons Functionality
const orderButtons = document.querySelectorAll('.btn.btn-light-outline, .btn.btn-dark-outline');
orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = "order.html"; // Replace with your actual order page
  });
});

