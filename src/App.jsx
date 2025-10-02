import './App.css'
import Header from './components/Header'
import Featured from './components/Featured'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <div className="app-root">
        <Header />
        
        <Featured />

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}

export default App
