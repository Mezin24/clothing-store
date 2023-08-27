import { ReactComponent as CartIconImg } from 'assets/icons/shop-cart.svg'
import { CartDropdownContext } from 'context/cartDropdownContext/CartDropdownContext'
import { useCallback, useContext } from 'react'
import './cartIcon.scss'

export const CartIcon = () => {
  const {setIsOpen} = useContext(CartDropdownContext)

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen])

  return (
    <div className="cart-icon-container" onClick={toggleOpen}>
      <CartIconImg className='shopping-icon'/>
      <span className="item-count">0</span>
    </div>
  )
}