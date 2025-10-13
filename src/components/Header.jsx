import './header.css'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '../contexts/CartContext'

export default function Header({ onCartClick }) {
  const { items } = useCart() || { items: [] }
  const itemCount = items.reduce((sum, item) => sum + item.qty, 0)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">
            <span className="logo-text">Eliane's Favorite Treats</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button onClick={onCartClick} className="cart-btn">
            <ShoppingBagIcon className="cart-icon" />
            {itemCount > 0 && (
              <span className="cart-count">{itemCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
