import { useMemo } from 'react'
import './categoryItem.scss'

export const CategoryItem = ({item}) => {
  const {
    id,
    imageUrl,
    title
  } = item

  const styles = useMemo(() => (
    {
      backgroundImage: `url(${imageUrl})`,
    }
  ), [imageUrl])
  
  return (
    <div
    key={id}
    className='category-container'
    
  >
    <div className='background-image' style={styles}/>
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}