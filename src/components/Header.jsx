import './header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo-badge">E</div>
          <div>
            <div className="brand-title">Elaine's Favorite Treats</div>
            <div className="brand-sub">Handcrafted pastries & confections</div>
          </div>
        </div>
        <nav className="nav">
          <a href="#favorites">Favorites</a>
          <a href="#about">About</a>
          <a className="cta" href="#shop">Shop</a>
          <button id="cart-toggle" className="cart-btn">Cart</button>
        </nav>
      </div>
    </header>
  )
}
