export function setupCartToggle() {
  if (typeof document === 'undefined') return
  document.addEventListener('click', (e) => {
    const t = e.target
    if (!t) return
    if (t.id === 'cart-toggle' || t.closest('#cart-toggle')) {
      const el = document.getElementById('cart-drawer')
      if (el) el.classList.toggle('open')
    }
  })
}
