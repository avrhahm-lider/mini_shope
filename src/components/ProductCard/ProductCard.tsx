import { useNavigate } from "react-router";
import type { Product } from "../../types/product";
import { favoritesStore } from "../../store/favoritesStore";
import "./productCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
interface productCardProps {
  product: Product;
  isFavorite?: boolean;
}

export default function ProductCard({ product, isFavorite }: productCardProps) {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const navigait = useNavigate();
  const remove = favoritesStore((s) => s.remove);
  const add = favoritesStore((s) => s.add);
  const favorites = favoritesStore((s) => s.products);
  const isInFav = favorites.find((val) => val.id === product.id);
  function favoriteToggle() {
    console.log(favorites, isInFav);
    if (!isInFav) add(product);
    else remove(product.id);
  }

  return (
    <div className={`product-card ${theme} `}>
      <img className='click-div'
      onClick={() => navigait(`/products/${product.id}`)}
        src={product.image} alt="productImage" width="120px" height="100px" />
      <div id="footer-card">
        <div id="desc"
        className='click-div'
        onClick={() => navigait(`/products/${product.id}`)}
        >
          <h4>{product.title}</h4>
          <p> {product.price}</p>
        </div>
      
      {!isFavorite && (
        <button className={`hart-btn`} onClick={favoriteToggle}>
          {!isInFav && <span className="material-symbols-outlined">favorite</span>}
          {isInFav && <span className="material-symbols-outlined">heart_check</span>}
        </button>
      )}

      {isFavorite && (
        <div>
          <button id="heart-img" onClick={() => remove(product.id)}>
            remove
          </button>
        </div>
      )}
      </div>
    </div>
  );
}
