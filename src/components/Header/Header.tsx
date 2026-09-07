import React, { useContext, useState } from 'react'
import { Link, useNavigate} from 'react-router'
import { favoritesStore } from '../../store/favoritesStore'
import { ThemeContext } from '../../context/ThemeContext'
import './Header.css'
export default function Header() {
    const navigate = useNavigate()
    const favorites = favoritesStore((s) => s.products)
    const {theme, toggleTheme} = useContext(ThemeContext)
    const [currentPage, setCurrentPage] = useState('product')
    function onClickProduct() {
        setCurrentPage('product')       
    }

    function onClickDitail() {
        setCurrentPage('ditail')       
    }    
  return (
    <div className={`nav-bar ${theme} `}>
        <h3>Mini Shop</h3>
        <div id='links'>
            <Link onClick={()=> onClickProduct()} className={`link-btn ${theme} ${currentPage === 'product'? 'curentPage' : ''}`} to={'/'}>Products </Link>
            <Link onClick={()=> onClickDitail()} className={`link-btn ${theme} ${currentPage === 'product'? '' : 'curentPage'}`} to={'/favorites'}>favorites ({favorites.length})</Link>
        </div>
        <button className={`theme-btn ${theme}`} onClick={() => toggleTheme()}><span className="material-symbols-outlined">
{theme === 'light' ? 'light_mode' : 'dark_mode'}
    </span></button>
    </div>
  )
}
