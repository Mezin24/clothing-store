import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, deleteItem, removeItemFromCart } from 'store/cart/cart.actions'
import './checkoutItem.scss'
import { getCartItems } from 'store/cart/cart.selectors'

export const CheckoutItem = ({product}) => {
  const {name, imageUrl, price, quantity, id} = product
  const dispatch = useDispatch()
  const cart = useSelector(getCartItems)

  const deleteItemHandler = useCallback(() => {
    dispatch(deleteItem(cart, id))
  }, [dispatch, id, cart])

  const addItemHandler = useCallback(() => {
    dispatch(addItemToCart(cart, product))
  }, [dispatch, product, cart])

  const removeItemHandler = useCallback(() => {
    dispatch(removeItemFromCart(cart, id))
  }, [dispatch, id, cart])
  
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