import './productcard.css'
import { useCart } from '../contexts/CartContext'

export default function ProductCard({ product, onAddToCart }) {
  const cart = useCart()

  function onAdd() {
    cart.add(product)
    // Optional: you could call onAddToCart here if you want to show the cart drawer immediately
    // onAddToCart && onAddToCart()
  }

  return (
    <article className="product-card">
      <div className="product-media" style={{ backgroundImage: `url(${product.image})` }} />
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-row">
          <div className="price">{product.price.toFixed(2)}</div>
          <button className="btn small" onClick={onAdd}>Add</button>
        </div>
      </div>
    </article>
  )
}
