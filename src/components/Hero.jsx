import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: 'url(./stock/croissants.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content text-left">
        <div className="hero-text">
          <h1 className="hero-title">
            Bite into Happiness<br />
            <span className="hero-subtitle">Savor the Sweetness</span>
          </h1>
          <p className="hero-description">
            Experience the finest handcrafted pastries, cakes, and confections made with premium ingredients and a passion for perfection. Best sweet treats you will find in the north Denver area.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
