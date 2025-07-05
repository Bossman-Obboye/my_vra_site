document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('scrollBtn');
  btn.addEventListener('click', function() {
    const target = document.getElementById('more');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Simple ripple animation for button feedback
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 250);
    }
  });
});