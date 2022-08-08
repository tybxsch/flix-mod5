import React from 'react'
import Login from '../../assets/Login.png'
import { Link } from 'react-router-dom'
import S from '../../components/Noticia/noticia.module.css'

const Noticia = () => { 
  return (
    <div className={S.container}>
        <div className={S.notificacao}>
        <Link to='/perfil'> <img src={Login} alt="" className={S.image}/></Link>
            <p>Carol Saint postou uma Review sobre</p>
            <p>RESILIA DEV FULL STACK PARTE: 1</p>
            <p>(2002);</p>
            </div>
            
            <div className={S.notificacao}>
        <Link to='/perfil'> <img src={Login} alt="" className={S.image}/></Link>
            <p>Carol Saint postou uma Review sobre</p>
            <p>RESILIA DEV FULL STACK PARTE: 1</p>
            <p>(2002);</p>
            </div>

        </div>
  )
}

export default  Noticia;