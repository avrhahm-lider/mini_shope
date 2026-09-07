import React from 'react'
import type { Product } from '../../types/product'
import { useNavigate } from 'react-router';
import { favoritesStore } from '../../store/favoritesStore';
import './ProductDetails.css'
interface detailType{
    product : Product
    
}

export default function ProductDetails({product}: detailType) {

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
    <div id="product-detail">
      <img id='img-dateil' src={product.image} alt="productImage" width="420px" height="400px" />
      <div id="footer-detail">  
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <p>{product.description}</p>
        <div id="button-detail">
        <button className={'fav-btn'} onClick={favoriteToggle}>{isInFav ? 'remove from favorites': 'add to favorites'}</button>
        <button onClick={() => navigait("/")}>Back to products</button>
      </div>
      </div>
    </div>
  )

}
