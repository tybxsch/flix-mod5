import React from 'react'
import { useParams } from 'react-router-dom';
import { getSeries } from '../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import CardSerie from '../../components/CardSerie/CardSerie.jsx';
import S from '../Serie/Serie.module.css'


// LISTAR FILMES ESTILO CATALOGO

const Serie = () => {
  const params = useParams();
  const [series, setSeries] = useState([]);

 const require = async () => {
  const response = await getSeries();
  console.log(response);
  setSeries(response);
};
  console.log(series)

 useEffect(() => {
  require();
 }, []);

  return (
    <div className={S.page}>
        <h1> TESTE: {}</h1>
        <br />
      <div className={S.catalogo}>
        {/* <CardSerie/> */}
        
        {!!series && series.map((serie) =>{
          return (<CardSerie
            urlimg={serie.urlimg}
            title={serie.title}
            key={serie.id}
            />)
        })}
      </div>
    </div>
  )
};

export default Serie