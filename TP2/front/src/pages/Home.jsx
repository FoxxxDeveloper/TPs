import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import fotoAle from '../assets/fotoAlejandro.jpg'

const Home = () => {

const alumno= {nombreCompleto: 'Pedro Alejandro Torres Salazar',edad:'22',legajo:'55781', celular:'1131504137',hobie:'Jugar videojuegos', instagram:'https://www.instagram.com/aletorres0/', image:fotoAle }

  return (
    <div>
        <Header/>
        <Main alumno={alumno}/>
        <Footer/>
    </div>
  )
}

export default Home