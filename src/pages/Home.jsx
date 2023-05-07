import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import foto from "../assets/fotoAlejandro.jpg"

const alumno = {id: 1, nombre: 'Pedro Alejandro', apellido:'Torres Salazar', edad:22, legajo: 55781, celular: 3814031834, hobby: 'Jugar video juegos', foto: foto}

const Home = () => {
  return (
    <>
    <Header/>
    <Main alumno = {alumno}/>
    <Footer/>
    </>

  )
}

export default Home