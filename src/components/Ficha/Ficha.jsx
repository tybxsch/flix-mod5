import React, { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import S from '../Ficha/Ficha.module.css'
import trash from '../../assets/trash-can.png'
import edit from '../../assets/contract.png'
import { deleteSeries } from '../../services/api'
// import { getSeriesById } from '../../services/api'


const Ficha = ({title, genre, id}) => {

  // const {id} = useParams();
  function handleDelete() {
        deleteSeries(id)
        console.log(id);
  }
  // console.log(handleDelete);


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
        {/* vai para a pagina da serie selecionada e abre para editar || alterar a rota */}
        <button onClick={handleDelete}>KRL</button>
          <img className={S.icon} src={trash} alt="" />
        {/* alterar trash para button con onclick handleDelte */}
      </div>  
    </div>
  )
}

export default Ficha