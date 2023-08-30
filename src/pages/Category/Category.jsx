import { ProductCard } from "components/productCard/ProductCard"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './category.scss'
import { useSelector } from "react-redux"
import { getCategoriesMap } from "store/categories/categories.selectors"

const Category = () => {
  const {category} = useParams()
  const categoriesMap = useSelector(getCategoriesMap)

  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className="title">{category}</h2>
      <div className="products-container">
        {products &&
          products
          .map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
  )
}
export default Category