import React from 'react'
import { useParams } from 'react-router-dom';
import { getSeriesById } from '../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import CardSerie from '../../components/CardSerie/CardSerie';


// LISTAR FILMES ESTILO CATALOGO

const Serie = () => {
  const params = useParams();
  const [series, setSeries] = useState([]);

 const require = async () => {
  const response = await getSeriesById(params.id);
  setSeries(response);
 };

 useEffect(() => {
  require();
 }, [params.id]);

  return (
    <div>
      <h1> TESTE: {params.id}</h1>
      
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