import './cartdrawer.css'
import { useCart } from '../contexts/CartContext'

export default function CartDrawer() {
  const { items, remove, clear } = useCart() || { items: [] }

  return (
    <aside className="cart-drawer" id="cart-drawer" aria-hidden>
      <div className="drawer-inner">
        <h3>Your Cart</h3>
        <div className="cart-list">
          {items.length === 0 && <div className="empty">Your cart is empty</div>}
          {items.map((it) => (
            <div className="cart-item" key={it.id}>
              <div className="ci-left">
                <div className="ci-thumb" style={{ backgroundImage: `url(${it.image})` }} />
                <div>
                  <div className="ci-name">{it.name}</div>
                  <div className="ci-qty">Qty: {it.qty}</div>
                </div>
              </div>
              <div className="ci-actions">
                <div className="ci-price">${(it.price * it.qty).toFixed(2)}</div>
                <button className="link" onClick={() => remove(it.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="drawer-actions">
          <button className="btn ghost" onClick={() => (document.getElementById('cart-drawer').classList.remove('open'))}>Close</button>
          <button className="btn primary" onClick={() => { alert('Thanks! Checkout is a demo.'); clear(); document.getElementById('cart-drawer').classList.remove('open') }}>Place Order</button>
        </div>
      </div>
    </aside>
  )
}
