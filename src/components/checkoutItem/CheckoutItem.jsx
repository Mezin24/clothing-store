import { useCallback, useContext } from 'react'
import './checkoutItem.scss'
import { CartContext } from 'context/cartContext/CartContext'

export const CheckoutItem = ({product}) => {
  const {name, imageUrl, price, quantity, id} = product
  const {deleteItem, addItemToCart, removeItemFromCart} = useContext(CartContext)

  const deleteItemHandler = useCallback(() => {
    deleteItem(id)
  }, [deleteItem, id])

  const addItemHandler = useCallback(() => {
    addItemToCart(product)
  }, [addItemToCart, product])

  const removeItemHandler = useCallback(() => {
    removeItemFromCart(id)
  }, [removeItemFromCart, id])
  
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className='arrow' onClick={removeItemHandler}> &#10094;</span>
        <span className="value">{quantity}</span>
        <span className='arrow' onClick={addItemHandler}> &#10095;</span>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItemHandler}>&#10005;</div>
    </div>
  )
}