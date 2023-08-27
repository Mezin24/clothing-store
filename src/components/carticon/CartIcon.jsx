import { ReactComponent as CartIconImg } from 'assets/icons/shop-cart.svg'
import { CartContext } from 'context/cartContext/CartContext'
import { useCallback, useContext } from 'react'
import './cartIcon.scss'

export const CartIcon = () => {
  const {setIsOpen, itemsInCart, isOpen} = useContext(CartContext)
  
  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  return (
    <div className="cart-icon-container" onClick={toggleOpen}>
      <CartIconImg className='shopping-icon'/>
      <span className="item-count">{itemsInCart}</span>
    </div>
  )
}