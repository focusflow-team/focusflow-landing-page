/* ── FAQ accordion ── */
document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-item__answer');
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('open');
            el.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
            el.querySelector('.faq-item__answer').hidden = true;
        });

        // Open clicked if it wasn't already open
        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            answer.hidden = false;
        }
    });
});