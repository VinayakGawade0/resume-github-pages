// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Include loader
document.addEventListener('DOMContentLoaded', () => {
  const include = (selector, url, after) => {
    const el = document.querySelector(selector);
    if (!el) return;
    fetch(url, { cache: 'no-store' })
      .then(r => {
        if (!r.ok) throw new Error(`Failed to load ${url}: ${r.status}`);
        return r.text();
      })
      .then(html => {
        el.outerHTML = html;
        if (typeof after === 'function') after();
      })
      .catch(err => {
        // Optional: console.warn(err);
      });
  };

  // nav
  include('[data-include="nav"]', 'assets/includes/nav.html', () => {
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('a.nav-link[data-active]').forEach(a => {
      if ((a.getAttribute('data-active') || '').toLowerCase() === path) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  });

  // footer
  include('[data-include="footer"]', 'assets/includes/footer.html');
});
