import { ReactComponent as CartIconImg } from 'assets/icons/shop-cart.svg'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from 'store/cart/cart.actions'
import { getCartIsOpen, getItemsInCart } from 'store/cart/cart.selectors'
import './cartIcon.scss'

export const CartIcon = () => {
  const isOpen = useSelector(getCartIsOpen)
  const itemsInCart = useSelector(getItemsInCart)
  const dispatch = useDispatch()
  
  const toggleOpen = useCallback(() => {
    dispatch(setIsCartOpen(!isOpen))
  }, [dispatch, isOpen])

  return (
    <div className="cart-icon-container" onClick={toggleOpen}>
      <CartIconImg className='shopping-icon'/>
      <span className="item-count">{itemsInCart}</span>
    </div>
  )
}