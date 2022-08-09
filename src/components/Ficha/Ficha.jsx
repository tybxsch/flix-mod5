import React from 'react'
import { Link } from 'react-router-dom'
import S from '../Ficha/Ficha.module.css'
import trash from '../../assets/trash-can.png'
import edit from '../../assets/contract.png'

const Ficha = ({title, genre }) => {
  return (
    <div className={S.ficha}>
       <div className={S.campo}>
        <h3>Título</h3>
        <p className={S.values}>{title}</p>
        {/* <p className={S.values}>asneira</p> */}

      </div>
      <div className={S.campo}>
        <h3>Gênero</h3>
        <p className={S.values}>{genre}</p>
        {/* <p className={S.values}>bobagem</p> */}

      </div> 

      {/* buttons  */}
      <div>
        <Link to="/catalogo"><img className={S.icon} src={edit} alt="" /></Link>
        <Link to="/home"><img className={S.icon} src={trash} alt="" /></Link>

      </div>  
    </div>
  )
}

export default Ficha