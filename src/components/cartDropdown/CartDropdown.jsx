import { Button } from "components/UI/button/Button"
import { CartItem } from "components/cartItem/CartItem"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setIsCartOpen } from "store/cart/cart.actions"
import { getCartItems } from "store/cart/cart.selectors"
import './cartDropdown.scss'

export const CartDropdown = () => {
  const cart = useSelector(getCartItems)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    navigate('/checkout')
    dispatch(setIsCartOpen(false))
  }, [dispatch, navigate])
  
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