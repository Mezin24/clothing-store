import { BUTTON_THEME, Button } from 'components/UI/button/Button'
import './productCard.scss'

export const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type='button' buttonTheme={BUTTON_THEME.inverted}>Add to card</Button>
    </div>
  )
}