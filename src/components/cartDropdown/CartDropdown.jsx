import { Button } from "components/UI/button/Button"
import { CartItem } from "components/cartItem/CartItem"
import { CartContext } from "context/cartContext/CartContext"
import { useCallback, useContext } from "react"
import { useNavigate } from "react-router-dom"
import './cartDropdown.scss'

export const CartDropdown = () => {
  const {cart, setIsOpen} = useContext(CartContext)
  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    navigate('/checkout')
    setIsOpen(false)
  }, [navigate, setIsOpen])
  
  return (
    <div className="cart-dropdown-container">
      {cart.length ?
      <div className="cart-items">
        {cart.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div> :
      <span className="empty-message">Your cart is empty</span>
      }
      <Button onClick={handleClick }>Go to checkout</Button>
    </div>
  )
}