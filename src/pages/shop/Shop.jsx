import { ProductCard } from "components/productCard/ProductCard"
import { CategoriesContext } from "context/categoriesContext/CategoriesContext"
import { memo, useContext } from "react"
import { Link } from "react-router-dom"

export const Shop = memo(() => {
  const {categories} = useContext(CategoriesContext)
  return (
    <>
      {Object.entries(categories).map(([title, products]) => (
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