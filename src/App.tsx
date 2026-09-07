
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
