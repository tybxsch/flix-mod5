import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cadastro from './pages/Cadastro/Cadastro'
import Serie from './pages/Serie/Serie'
import Home from './pages/Home/Home'
import Editor from './pages/Editor/Editor'
import Loading from './pages/Loading/Loading'
import SerieDetails from './pages/SerieDetails/SerieDetails'

const Routes = () => {
  return (
    <BrowserRouter>
    <div className='defaultContainer'>
    <Header />
    <Switch>

        <Route path="/" element={<Home />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/editor" element={<Editor />} />
        <Route path="/serie" element={<Serie />}/>
        <Route path="/loading" element={<Loading/>}/>
        <Route path='/serieDetails/:id' element={<SerieDetails/>}/>

    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
  )
}

export default Routes