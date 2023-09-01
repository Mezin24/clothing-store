import { CheckoutItem } from 'components/checkoutItem/CheckoutItem'
import { useSelector } from 'react-redux'
import { getCartItems, getCartTotalSum } from 'store/cart/cart.selectors'
import './checkout.scss'

export const Checkout = () => {
  const cart = useSelector(getCartItems)
  const totalSum = useSelector(getCartTotalSum)
  
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