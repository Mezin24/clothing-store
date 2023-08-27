import { BUTTON_THEME, Button } from 'components/UI/button/Button'
import { CartContext } from 'context/cartContext/CartContext'
import { memo, useContext } from 'react'
import './productCard.scss'

export const ProductCard = memo(({product}) => {
  const {name, imageUrl, price} = product
  const {addItemToCart} = useContext(CartContext)
  const addHandler = () => {
    addItemToCart(product)
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