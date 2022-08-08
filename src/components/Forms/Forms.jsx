import React, { useState } from 'react'
import S from '../Forms/Forms.module.css'
 import {postSeries} from '../../services/api.js'
// import CardSerie from "../CardSerie/CardSerie.jsx";n

const Forms = () => {
     const [formData, setFormData] = useState({
        "title":"",
        "description":"",
        "genre":"",
        "seasons":"",
        "urlimg":""
     });

     function handleChange(target, key){
        const value = target.value;
        setFormData({...formData, [key]:value});       
     }

     function handleSave(event){
        event.preventDefault();
        postSeries(formData);
     }

    //  function handleDelete(index){
    //     setFormData((formData) => formData.splice(index, 1))
        
    //  }
  return (
    <div className={S.form}>
        <form action="">
            <label htmlFor="" >
                Título da serie:
                <input 
                type="text" 
                className={S.normal}
                value={formData.title}
                onChange={({target})=> handleChange(target,"title")}
                />
            </label>
            {/* <label htmlFor="">
                Data de lançamento
                <input type="date" />
            </label> */}
            <label htmlFor="">
                Gênero:
                <input 
                type="text" 
                className={S.normal} 
                value={formData.genre}
                onChange={({target})=> handleChange(target,"genre")}
                />
            </label>

            <label htmlFor="">
                Temporada:
                <input 
                type="number" 
                className={S.normal}
                value={formData.seasons}
                onChange={({target})=> handleChange(target,"seasons")} 
                />
            </label>

            <label htmlFor="">
                Url_imagem:
                <input 
                type="text" 
                className={S.normal}
                value={formData.urlimg}
                onChange={({target})=> handleChange(target,"urlimg")}
                 />
            </label>

            <label>
                Sinopse:
                <input 
                type="text" 
                className={S.krl}
                value={formData.description}
                onChange={({target})=> handleChange(target,"description")}
                />
            </label>
        </form>

        {/* <div> */}
            <img src={formData.urlimg} alt="" />
            {/* <img src="https://br.web.img3.acsta.net/pictures/14/04/14/10/51/458918.jpg" alt="" /> */}
            {/* <h4>nome serie</h4>
            <p>Sinopse</p>
            <p>Genero</p>
        </div> */}
        <div className={S.botoes}>
        {/* Alterar pelo componente Button */}
            <button>Cancelar</button>
            <button>Excluir</button>
            {/* <button onClick={handleDelete}>Excluir</button> */}
            <button onClick={handleSave}>Salvar</button>
        </div>
    </div>
  )
}

export default Forms