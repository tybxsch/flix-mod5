import React from 'react'
import { useParams } from 'react-router-dom';
import { getSeries } from '../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import CardSerie from '../../components/CardSerie/CardSerie.jsx';
import S from '../Serie/Serie.module.css'
import Loading from '../../components/Loading/Loading';


// LISTAR FILMES ESTILO CATALOGO

const Serie = () => {
  const params = useParams();
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

 const require = async () => {
  const response = await getSeries();
  console.log(response);
  setSeries(response);
};
  console.log(series)

 useEffect(() => {
  require();
  setLoading(true) // iniciei o loader, fazer ternário
 }, []);

  return (
    <div className={S.page}>
        <h1> Séries {}</h1>
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