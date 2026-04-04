/* ══════════════════════════════════════
   MixaMeds · main.js
   ══════════════════════════════════════ */

// ── NAV SCROLL EFFECT ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});
// Close on link click
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'));
});

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Open clicked if it was closed
    if (!isOpen) item.classList.add('open');
  });
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.step, .med-card, .price-card, .why-card, .faq-item').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`;
  observer.observe(el);
});

// ── SMOOTH SCROLL (backup for older browsers) ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
