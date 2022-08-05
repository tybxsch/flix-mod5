import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/cadastro'>Cadastro de filmes</Link>
        <Link to='/editor'>Editar Filme</Link>
        <Link to='/filme'>Catálogo</Link>
        <Link to='/notificacao'>Notificacao</Link>
      </nav>
    </header>
  )
}

export default Header