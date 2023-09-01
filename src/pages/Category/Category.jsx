import { ProductCard } from "components/productCard/ProductCard"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './category.scss'
import { useSelector } from "react-redux"
import { getCategoriesIsLoading, getCategoriesMap } from "store/categories/categories.selectors"
import { Spinner } from "components/UI/spinner/Spinner"

const Category = () => {
  const {category} = useParams()
  const categoriesMap = useSelector(getCategoriesMap)
  const categoriesIsLoading = useSelector(getCategoriesIsLoading)
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className="title">{category}</h2>
      {categoriesIsLoading ? <Spinner/> : 
        <div className="products-container">
          {products &&
            products
            .map((product) => (
              <ProductCard key={product.id} product={product}/>
              ))}
        </div>
      }
    </>
  )
}
export default Category