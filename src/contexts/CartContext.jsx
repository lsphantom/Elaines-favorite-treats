import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function add(item) {
    setItems((s) => {
      const found = s.find((i) => i.id === item.id)
      if (found) {
        return s.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...s, { ...item, qty: 1 }]
    })
  }

  function remove(id) {
    setItems((s) => s.filter((i) => i.id !== id))
  }

  function clear() {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
