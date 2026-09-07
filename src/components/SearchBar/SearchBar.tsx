import React, { useEffect, useRef } from 'react'
import "./SearchBar.css"

interface  onClickHandlerType{
    onChangehandler : (e:  React.ChangeEvent<HTMLInputElement>)=>void
}

export default function SearchBar({onChangehandler} : onClickHandlerType) {
  const inputFocus = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inputFocus.current?.focus()
  })
  return (
    <div className={`serch-main`}>
        <input className='input' type="text" onChange={onChangehandler} placeholder='Serch...' ref={inputFocus}/>
        <span className="material-symbols-outlined">
search
</span>
    </div>
  )
}