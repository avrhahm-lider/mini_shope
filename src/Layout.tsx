import React, { useContext } from 'react'
import Header from './components/Header/Header'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
import './index.css'

export default function Layout() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={theme }>
        <ThemeProvider>
        <Header/>
        <div className={`outlet`}><Outlet/></div>
        <Footer/>
        </ThemeProvider>

    </div>
  )
}
