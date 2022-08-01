import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
    <Switch>

        <Route path="/" element={<Home />}/>

    </Switch>
    </BrowserRouter>
  )
}

export default Routes