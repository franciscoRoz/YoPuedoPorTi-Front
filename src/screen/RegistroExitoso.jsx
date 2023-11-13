import React from 'react'
import { Header } from '../Components/Header'
import InstagramLogo from '../Components/IgLogo'

export const RegistroExitoso = () => {
  return (
    <div>
        <Header/>

        <h1 style={{color:"#3c3c3c",textAlign:"center"}}>Tu registro ha sido exitoso!</h1>
        <br/><br/><br/>
        <strong  style={{color:"#3c3c3c",textAlign:"center"}}>Pronto recibiras un correo con informacion de tu cuenta</strong>
        <InstagramLogo/>
    </div>
  )
}
