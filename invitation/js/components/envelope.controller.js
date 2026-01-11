export function initEnvelopeController() {
  const env = document.getElementById('envelope');
  const toggleBtn = document.getElementById('toggleBtn');

  function setState(open) {
    env.classList.toggle('is-open', open);
    document.body.classList.toggle('is-open', open);
    env.setAttribute('aria-pressed', String(open));
    toggleBtn.setAttribute('aria-expanded', String(open));
  }

  function toggle() {
    setState(!env.classList.contains('is-open'));
  }

  // Click en el sobre abre/cierra, pero si el click es dentro de la carta, NO alterna
  env.addEventListener('click', (e) => {
    if (e.target.closest('.letter')) return;
    toggle();
  });

  env.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

  toggleBtn.addEventListener('click', toggle);

  setState(false);
}
