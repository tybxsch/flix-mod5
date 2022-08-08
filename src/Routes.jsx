import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Cadastro from './pages/Cadastro/Cadastro'
import Serie from './pages/Serie/Serie'
import Home from './pages/Home/Home'
import Editor from './pages/Editor/Editor'
import Loading from './pages/Loading/Loading'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
    <Switch>

        <Route path="/" element={<Home />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/editor" element={<Editor />} />
        <Route path="/serie" element={<Serie />}/>
        <Route path="/loading" element={<Loading/>}/>


    </Switch>
    </BrowserRouter>
  )
}

export default Routes