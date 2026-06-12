/**
 * Theme switcher – reads <select id="theme-select"> and loads the corresponding CSS.
 * Stores preference in localStorage.
 */
(function() {
  const themeLink = document.getElementById('theme-style');
  const select = document.getElementById('theme-select');
  if (!themeLink || !select) return;

  const THEME_KEY = 'donutClubTheme';

  function setTheme(theme) {
    themeLink.href = `css/theme-${theme}.css`;
    localStorage.setItem(THEME_KEY, theme);
  }

  // Load saved theme
  const saved = localStorage.getItem(THEME_KEY);
  if (saved && ['light', 'dark', 'galaxy', 'neon', 'pastel'].includes(saved)) {
    select.value = saved;
    setTheme(saved);
  }

  select.addEventListener('change', () => {
    setTheme(select.value);
  });
})();
