import { Spinner } from "components/UI/spinner/Spinner"
import { ProductCard } from "components/productCard/ProductCard"
import { memo } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCategoriesIsLoading, getCategoriesMap } from "store/categories/categories.selectors"

export const Shop = memo(() => {
  const categoriesMap = useSelector(getCategoriesMap)
  const categoriesIsLoading = useSelector(getCategoriesIsLoading)

  return (
    <>
      {
      categoriesIsLoading ?
        <Spinner/> : 
        Object.entries(categoriesMap).map(([title, products]) => (
          <div key={title}>
            <h2>
              <Link to={`${title}`}>
                  {title.toUpperCase()}
              </Link>
            </h2>
            <div className="products-container">
              {[...products]
                .splice(0, 4)
                .map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          </div>
      ))}
    </>
  )
})