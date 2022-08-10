import React, { useState } from 'react'
import S from '../Forms/Forms.module.css'
 import {editSeries, postSeries} from '../../services/api.js'
 import Botao from '../Botao/Botao'
// import CardSerie from "../CardSerie/CardSerie.jsx";n

const Forms = ({id}) => {
     const [formData, setFormData] = useState({
        "id":"",
        "title":"",
        "description":"",
        "genre":"",
        "seasons":"",
        "urlimg":""
     });

     function handleChange(target, key){
        const value = target.value;
        setFormData({...formData, [key]:value});  
        console.log(formData);     
     }

     function handleSave(event){
        event.preventDefault();
        postSeries(formData);
        alert("Serie cadastrada com sucesso!");
     }

     async function handleUpdate(e){
        e.preventDefault();
        // editSeries(id, formData);
        const response = await editSeries(id, formData);
        console.log("tetsa");
        console.log(response)
      }

  return (
    <div className={S.form}>
        <div className={S.formText}>
        <form action="">
            <label htmlFor="" >
                Título do ID:
                <br></br>
                <input 
                type="text" 
                placeholder='Insira o id'
                className={S.normal}
                value={formData.id}
                onChange={({target})=> handleChange(target,"id")}
                />
            </label>

            <div className={S.inputs}>
            <label htmlFor="" >
                Título da serie:
                <br></br>
                <input 
                type="text" 
                placeholder='Insira o Titulo'
                className={S.normal}
                value={formData.title}
                onChange={({target})=> handleChange(target,"title")}
                />
            </label>
           <br></br>
            <label htmlFor="">
                Gênero:
                <br></br>
                <input 
                type="text" 
                placeholder='Insira o Gênero'
                className={S.normal} 
                value={formData.genre}
                onChange={({target})=> handleChange(target,"genre")}
                />
            </label>
            <br></br>
            <label htmlFor="">
                Temporada:
                <br></br>
                <input 
                type="number" 
                className={S.normal}
                value={formData.seasons}
                onChange={({target})=> handleChange(target,"seasons")} 
                />
            </label>
            <br></br>
            <label htmlFor="">
                Imagem:
                <br></br>
                <input 
                type="text" 
                placeholder='URL da imagem'
                className={S.normal}
                value={formData.urlimg}
                onChange={({target})=> handleChange(target,"urlimg")}
                 />
            </label>
            <br></br>
            <label>
                Sinopse:
                <br></br>
                <input 
                type="text" 
                placeholder='Insira uma sinopse'
                className={S.krl}
                value={formData.description}
                onChange={({target})=> handleChange(target,"description")}
                />
            </label>
            <br></br>
            </div>
            </form>
            <img className={S.imgPreview}
            src={formData.urlimg} alt="" />
           
            </div>



        <div className={S.botoes}>
            <Botao text='Cancelar'/>
            <Botao text='Atualizar Serie' onclick={handleUpdate}/>
            <Botao onclick={handleSave} text='Salvar'/>
        </div>

    </div>
  )
}

export default Forms