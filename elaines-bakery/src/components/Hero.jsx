import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Elaine's Favorite Treats</h1>
          <p className="lede">Warm, elegant, and indulgent — discover pastries made with fine chocolate and a touch of love.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#favorites">Shop Favorites</a>
            <a className="btn ghost" href="#about">Learn More</a>
          </div>
        </div>
        <div className="hero-image" aria-hidden>
          <div className="cupcake" />
        </div>
      </div>
    </section>
  )
}
