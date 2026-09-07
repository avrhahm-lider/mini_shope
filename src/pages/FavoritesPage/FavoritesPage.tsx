import React, { useContext, useEffect, useState } from 'react'
import { favoritesStore } from '../../store/favoritesStore'
import CardList from '../../components/CardList/CardList'
import { ThemeContext } from '../../context/ThemeContext'
import './FavoritesPage.css'

export default function FavoritesPage() {
  const {theme, toggleTheme} = useContext(ThemeContext)
    const favorites = favoritesStore(s => s.products)
  return (
    <div className={`main-card main-${theme} ` }>
        <CardList products={favorites} isFavorite={true}/>
    </div>
  )
}
