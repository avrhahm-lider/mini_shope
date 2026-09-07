import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../context/ThemeContext'
export default function Footer() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`footer ${theme} `}>
        Footer
    </div>
  )
}
