import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useFetch } from '../../hooks/useFetch'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { ThemeContext } from '../../context/ThemeContext'

export default function ProductPage() {
  const {theme, toggleTheme} = useContext(ThemeContext)
    const navigait = useNavigate();
    const {id} = useParams()
    console.log(id);
    
    const {Products} = useFetch('https://fakestoreapi.com/products')
    console.log(Products);
    
    const product = Products.find(val => val.id === Number(id))
    console.log(product);
    
    if (!product){
        navigait('/')
        return null
    }
  return (
    <div className={` ${theme} `}>
        <ProductDetails product={product}/>
    </div>
  )
}
