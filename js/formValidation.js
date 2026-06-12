/**
 * Simple client‑side validation for the newsletter form on join.html.
 * Also can be extended for contact form (mailto doesn't need it).
 */
(function() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) return;

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address 🍩');
      emailInput.focus();
      return false;
    }

    // Since it's a placeholder, prevent real submission and show a message
    e.preventDefault();
    alert('Thanks! Newsletter sign‑up will be available soon. 🎉');
    form.reset();
  });
})();
