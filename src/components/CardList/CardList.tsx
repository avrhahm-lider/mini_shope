import { useNavigate } from "react-router"
import type { Product } from "../../types/product"
import { favoritesStore } from "../../store/favoritesStore"
import ProductCard from "../ProductCard/ProductCard"
import "./CardList.css"
type ProductListProps = {
    products:     Product[]
    isFavorite?: boolean
    error?: Error | null
}

export default function CardList({products, error, isFavorite}: ProductListProps) {
    const navigait = useNavigate()
    const favoritproducts = favoritesStore((s)=> s.products)
        

    if (error)
        navigait("*")


    

  return (
    <section id="product-list">
        { products.map((val: Product) =>(
            <ProductCard key={val.id} product={val} isFavorite={isFavorite}/>
        ))}
    </section>
  )
}
