import React, { useState } from 'react'
import S from '../Forms/Forms.module.css'
import postSerie from '../../services/api.js'
// import CardSerie from "../CardSerie/CardSerie.jsx";n

const Forms = () => {
    const [formData, setFormData] = useState({
        
    })
  return (
    <div className={S.form}>
        <form action="">
            <label htmlFor="" >
                Título da serie:
                <input type="text" className={S.normal} />
            </label>
            {/* <label htmlFor="">
                Data de lançamento
                <input type="date" />
            </label> */}
            <label htmlFor="">
                Gênero:
                <input type="text" className={S.normal} />
            </label>

            <label htmlFor="">
                Temporada:
                <input type="number" className={S.normal} />
            </label>

            <label htmlFor="">
                Url_imagem:
                <input type="text" className={S.normal} />
            </label>

            <label>
                Sinopse:
                <input type="text" className={S.krl}/>
            </label>
        </form>

        {/* <div> */}
            <img src="https://br.web.img3.acsta.net/pictures/14/04/14/10/51/458918.jpg" alt="" />
            {/* <h4>nome serie</h4>
            <p>Sinopse</p>
            <p>Genero</p>
        </div> */}
    </div>
  )
}

export default Forms