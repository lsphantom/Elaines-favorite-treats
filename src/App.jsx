import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import products from './data/products'
import { CartProvider } from './contexts/CartContext'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <div className="app-root">
        <Header />
        <main>
          <Hero />

          <section className="products-section">
            <h2 className="section-title">Our Favorites</h2>
            <div className="products-grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}

export default App
