import { ProductCard } from "components/productCard/ProductCard"
import { CategoriesContext } from "context/categoriesContext/CategoriesContext"
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './category.scss'

const Category = () => {
  const {category} =useParams()
  const {categories} = useContext(CategoriesContext)
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(categories[category])
  }, [categories, category]);

  console.log(category)
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