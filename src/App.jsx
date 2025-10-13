import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Featured from './components/Featured'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'
import CartDrawer from './components/CartDrawer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <div className="app-root">
        <Header onCartClick={() => setCartOpen(true)} />
        
        <Featured />

        <Footer />
        <CartDrawer 
          isOpen={cartOpen} 
          onClose={() => setCartOpen(false)} 
        />
      </div>
    </CartProvider>
  )
}

export default App
