import { Fragment } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from '../contexts/CartContext'
import './cartdrawer.css'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, remove, clear } = useCart() || { items: [] }
  
  const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0)

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="cart-drawer-content">
                    <div className="cart-header">
                      <DialogTitle className="cart-title">Shopping Cart</DialogTitle>
                      <button
                        type="button"
                        className="cart-close"
                        onClick={onClose}
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="cart-body">
                      {items.length === 0 ? (
                        <div className="empty-cart">
                          <p>Your cart is empty</p>
                        </div>
                      ) : (
                        <div className="cart-items">
                          {items.map((item) => (
                            <div key={item.id} className="cart-item">
                              <div className="item-image">
                                <img src={item.image} alt={item.name} />
                              </div>
                              <div className="item-details">
                                <h4 className="item-name">{item.name}</h4>
                                <p className="item-qty">Qty: {item.qty}</p>
                                <p className="item-price">${(item.price * item.qty).toFixed(2)}</p>
                              </div>
                              <button
                                className="remove-btn"
                                onClick={() => remove(item.id)}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {items.length > 0 && (
                      <div className="cart-footer">
                        <div className="cart-total">
                          <strong>Total: ${total.toFixed(2)}</strong>
                        </div>
                        <div className="cart-actions">
                          <button
                            className="btn btn-secondary"
                            onClick={() => {
                              clear()
                              onClose()
                            }}
                          >
                            Clear Cart
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              alert('Thank you for your order! This is a demo.')
                              clear()
                              onClose()
                            }}
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
