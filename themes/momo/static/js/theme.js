(function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Set initial theme
  setTheme(getPreferredTheme());

  // Toggle on click
  if (toggle) {
    toggle.addEventListener('click', function() {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();
