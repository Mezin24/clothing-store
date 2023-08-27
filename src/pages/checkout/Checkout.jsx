import { useContext } from 'react'
import './checkout.scss'
import { CartContext } from 'context/cartContext/CartContext'
import { CheckoutItem } from 'components/checkoutItem/CheckoutItem'

export const Checkout = () => {
  const {totalSum, cart} = useContext(CartContext)
  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </header>
      {cart.map(item => <CheckoutItem key={item.id} product={item} />)}
      <footer className="total">
        Total: ${totalSum}
      </footer>
    </div>
  )
}