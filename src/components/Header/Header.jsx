import React from 'react'
import { Link } from 'react-router-dom'
import S from '../Header/header.module.css'

const Header = () => {
  return (
    <header className={S.conteiner}>
      <h1>Header</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/cadastro'>Cadastro de filmes</Link>
        <Link to='/editor'>Editar Filme</Link>
        <Link to='/filme'>Catálogo</Link>
      </nav>
      <img src="" alt="" />
    </header>
  )
}

export default Header