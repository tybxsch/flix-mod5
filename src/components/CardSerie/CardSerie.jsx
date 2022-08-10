import React from 'react';
// import { Link } from 'react-router-dom';
import S from '../CardSerie/cardSerie.module.css'
import Botao from '../Botao/Botao'

const CardSerie = ({ title, urlimg }) => {
  return (
    <div className={S.card}>
      <img src={urlimg}/>
      <h3>{title}</h3>
      
      {/* <img src='https://br.web.img2.acsta.net/r_1280_720/pictures/14/04/14/10/51/458918.jpg'/>
      <h3>Club das Winx</h3> */}
      <Botao text='Assistir'/>
    </div>
  )
}

export default CardSerie