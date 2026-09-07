import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import HomePage from './pages/HomePage/HomePage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import ProductPage from './pages/ProductPage/ProductPage'

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
