/* ── CTA form ── */
document.querySelector('.cta-section__form').addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (!input.value || !input.value.includes('@')) {
    input.focus();
    return;
  }
  const btn = e.target.querySelector('button');
  btn.textContent = '¡Listo! 🎉';
  btn.style.background = 'var(--soft-emerald)';
  btn.style.color = '#0D2B28';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Unirse a la lista';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
});