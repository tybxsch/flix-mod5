import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Cadastro from './pages/Cadastro/Cadastro'
import Filme from './pages/Filme/Filme'
import Home from './pages/Home/Home'
import Editor from './pages/Editor/Editor'
import Footer from './components/Footer/Footer'
import Notificacao from './pages/Notificacao/Notificacao'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
    <Switch>

        <Route path="/" element={<Home />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/editor" element={<Editor />} />
        <Route path="/filme" element={<Filme />}/>
        <Route path="/notificacao" element={<Notificacao />}/>


    </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default Routes