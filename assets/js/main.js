// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Persist selected font pack across pages (if used)
(function() {
  const saved = localStorage.getItem('vg-font');
  if (saved) document.documentElement.setAttribute('data-font', saved);
})();
