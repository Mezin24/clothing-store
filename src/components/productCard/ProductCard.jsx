import { BUTTON_THEME, Button } from 'components/UI/button/Button'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from 'store/cart/cart.actions'
import { getCartItems } from 'store/cart/cart.selectors'
import './productCard.scss'

export const ProductCard = memo(({product}) => {
  const {name, imageUrl, price} = product
  const dispatch = useDispatch()
  const cart = useSelector(getCartItems)

  const addHandler = () => {
    dispatch(addItemToCart(cart, product))
  }
  
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addHandler} type='button' buttonTheme={BUTTON_THEME.inverted}>Add to card</Button>
    </div>
  )
})