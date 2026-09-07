
import { useNavigate } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import { useContext, useEffect, useState } from "react"
import CardList from "../../components/CardList/CardList"
import SearchBar from "../../components/SearchBar/SearchBar"
import { ThemeContext } from "../../context/ThemeContext"
import './HomePage.css'

export default function HomePage() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const navigat = useNavigate()
    const {Products, error} = useFetch('https://fakestoreapi.com/products')
    const [serchTerm, setSerchTerm] = useState<any>([])

    useEffect(()=>{
      setSerchTerm(Products)
    }, [Products])


    function onChangehandler(e : React.ChangeEvent<HTMLInputElement>){
            const serchVal = e.target.value
            
            
        if (!serchVal) setSerchTerm(Products)
        else{
      console.log("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops".toLowerCase().startsWith(serchVal.toLowerCase()));
      
        const filteredMovies = Products.filter(val =>  val.title.trim().toLowerCase().startsWith(serchVal.toLowerCase()))
        console.log(filteredMovies.length); 
        setSerchTerm(filteredMovies)}
        
    }    
  return (
    <div className={`main-${theme} home-main`}>
      <SearchBar onChangehandler={onChangehandler}/>
      <CardList products={serchTerm} error={error}/>
    </div>
  )
}
