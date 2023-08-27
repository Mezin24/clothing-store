import { Button } from "components/UI/button/Button"
import { CartItem } from "components/cartItem/CartItem"
import { CartContext } from "context/cartContext/CartContext"
import { useContext } from "react"
import './cartDropdown.scss'

export const CartDropdown = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button>Go to checkout</Button>
    </div>
  )
}