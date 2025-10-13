import Hero from './Hero'
import ProductCard from './ProductCard'
import products from '../data/products'
import './featured.css'

export default function Featured() {
  return (
    <div>
      <Hero />
      
      <section className="products-section" id="products">
        <div className="container">
          <h2 className="section-title">Popular Products</h2>
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">What Our Clients Say</h2>
              <p className="about-description">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              </p>
              <div className="about-author">
                <strong>— Chef's Cuisine</strong>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-offers" id="offers">
        <div className="container">
          <div className="offer-content">
            <h2 className="offer-title">Special Offer</h2>
            <p className="offer-subtitle">Get 30% Discount</p>
            <a href="#products" className="btn btn-primary offer-btn">
              Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
