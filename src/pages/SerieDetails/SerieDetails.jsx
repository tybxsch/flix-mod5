import React, { useState } from 'react'
import CardSerie from '../../components/CardSerie/CardSerie'
import { useParams } from 'react-router-dom';
import { getSeries } from '../../services/api';
import S from './SerieDetails.module.css'

const SerieDetails = () => {
    const params = useParams();
    const [series, setSeries] = useState([]);
  
    const require = async () => {
    const response = await getSeries();
    console.log(response);
    setSeries(response);

    const [formData, setFormData] = useState({
      "title":"",
      "description":"",
      "genre":"",
      "seasons":"",
      "urlimg":""
   });

  return (
    <div>
        <div className={S.img}>
          <img className={S.imgPreview}
          src={formData.urlimg} alt="" />
        </div>
        <div className={S.infos}>
          <h2>{formData.title}</h2>
          <p>{formData.genre}</p>
          <p>{formData.description}</p>
          <p>{formData.seasons}</p>
        </div>
    </div>
  )
}}

export default SerieDetails