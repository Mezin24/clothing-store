import { ProductCard } from "components/productCard/ProductCard"
import { ProductsContext } from "context/productsContext/ProductsContext"
import { memo, useContext } from "react"
import './shop.scss'

export const Shop = memo(() => {
  const {products} = useContext(ProductsContext)
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
})