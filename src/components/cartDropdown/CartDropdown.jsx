import { Button } from "components/UI/button/Button"
import './cartDropdown.scss'

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to checkout</Button>
    </div>
  )
}