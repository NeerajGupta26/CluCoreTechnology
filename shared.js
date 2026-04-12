/* shared.js — CluCore Technology */

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ── Mobile menu toggle ── */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('open');
}

/* ── Scroll reveal ── */
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el, i) => {
    // Only auto-stagger siblings inside grid containers if no delay already set
    if (!el.style.transitionDelay) {
      const parent = el.parentElement;
      const siblings = parent ? Array.from(parent.querySelectorAll(':scope > .reveal')) : [];
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = (idx * 0.08) + 's';
    }
    observer.observe(el);
  });
});
