import React from 'react'
import { Link } from 'react-router-dom'
import S from '../Header/header.module.css'
import Logo from '../../assets/Logo2.png'
import Login from '../../assets/Login.svg'
const Header = () => {
  return (
    <header className={S.conteiner}>
      {/* <h1>Header</h1> */}
      <img src={Logo} alt="" className={S.logo} />
      <nav>
        <Link className={S.link} to='/'>Home</Link>
        <Link className={S.link} to='/cadastro'>Cadastro de filmes</Link>
        <Link className={S.link} to='/editor'>Editar Filme</Link>
        <Link className={S.link} to='/filme'>Catálogo</Link>
      </nav>
      <img src={Login} alt="" />
    </header>
  )
}

export default Header