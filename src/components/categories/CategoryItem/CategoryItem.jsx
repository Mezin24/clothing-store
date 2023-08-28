import { useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './categoryItem.scss'

export const CategoryItem = ({item}) => {
  const {
    id,
    imageUrl,
    title,
    route
  } = item

  const navigate = useNavigate()

  const navigateHandler = useCallback((route) => {
    navigate(route)
  }, [navigate])
  

  const styles = useMemo(() => (
    {
      backgroundImage: `url(${imageUrl})`,
    }
  ), [imageUrl])
  
  return (
  <div
    key={id}
    className='category-container'
    onClick={() => navigateHandler(route)}
  >
    <div className='background-image' style={styles} />
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}