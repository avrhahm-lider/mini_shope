import React from 'react'
import "./SearchBar.css"

interface  onClickHandlerType{
    onChangehandler : (e:  React.ChangeEvent<HTMLInputElement>)=>void
}

export default function SearchBar({onChangehandler} : onClickHandlerType) {

  return (
    <div className={`serch-main`}>
        <input className='input' type="text" onChange={onChangehandler} placeholder=''/>
        <span className="material-symbols-outlined">
search
</span>
    </div>
  )
}