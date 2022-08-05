import React from 'react'
import { useParams } from 'react-router-dom';
import { getSeries } from '../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import CardSerie from '../../components/CardSerie/CardSerie';


// LISTAR FILMES ESTILO CATALOGO

const Serie = () => {
  const params = useParams();
  const [series, setSeries] = useState([]);

 const require = async () => {
  const response = await getSeries(params.series);
  setSeries(response);
 };

 useEffect(() => {
  require();
 }, [params.series]);

  return (
    <div>
      <h1>Serie</h1>
      
      {!!series && series.map((serie) =>{
        return (<CardSerie
          title={serie.title}
          urlimg={serie.urlimg}
           />)
      })}
    </div>
  )
};

export default Serie