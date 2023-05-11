import React from 'react'
import fotoAle from '../Assets/fotoAlejandro.jpg'
const Header = () => {
  return (
    <div>
        <h1>
            Torres Salazar, Pedro Alejandro
        </h1>
        <img style={{width:'350px'}} src={fotoAle} alt="" />
    </div>
  )
}

export default Header