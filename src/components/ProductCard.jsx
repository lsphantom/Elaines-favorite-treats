import './productcard.css'
import { useCart } from '../contexts/CartContext'

export default function ProductCard({ product }) {
  const cart = useCart()

  function onAdd() {
    cart.add(product)
    const el = document.getElementById('cart-drawer')
    if (el) el.classList.add('open')
  }

  return (
    <article className="product-card">
      <div className="product-media" style={{ backgroundImage: `url(${product.image})` }} />
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-row">
          <div className="price">${product.price.toFixed(2)}</div>
          <button className="btn small" onClick={onAdd}>Add</button>
        </div>
      </div>
    </article>
  )
}
