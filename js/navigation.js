/**
 * Mobile navigation toggle.
 */
(function() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const list = nav.querySelector('.nav__list');

  if (!toggle || !list) return;

  toggle.addEventListener('click', () => {
    const isOpen = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked (mobile)
  list.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      list.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
