import React from 'react'
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

  return (
    <div>
    {!!series && series.map((serie) =>{
        return (<CardSerie
          urlimg={serie.urlimg}
          title={serie.title}
          key={serie.id}
          />)
      })}
    </div>
  )
}}

export default SerieDetails