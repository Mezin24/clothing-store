import './categoryItem.scss'

export const CategoryItem = ({item}) => {
  const {
    id,
    imageUrl,
    title
  } = item

  return (
    <div
    key={id}
    className='category-container'
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  >
    <div className='background-image' />
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}