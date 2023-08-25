import './categoriesList.scss'
import {CategoryItem} from '../CategoryItem/CategoryItem'

export const CategoriesList = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((item) => (
        <CategoryItem item={item}  key={item.id}/>
      ))}
    </div>
  )
}