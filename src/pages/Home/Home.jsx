import React from 'react'
import { useParams } from 'react-router-dom';
import { getSeries } from '../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import MovieRow from '../../components/MovieRow/MovieRow.jsx';
import S from '../Home/Home.module.css'
// import test from 'https://www.nerdsite.com.br/wp-content/uploads/2019/05/mrorbot.jpg'


const Home = () => {
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
    <div className={S.pageHome}>
      <div className={S.banner}>
      </div>
      <div className={S.gambizita}>
        <h1>Vem para DevFlix!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolor, eveniet facere, repellat omnis, necessitatibus dolorem maiores veniam voluptas quam sapiente sint deserunt enim unde cumque? Ipsa dolorum quo cupiditate. jasoiJOAS asoidjaoisdjaoiOIJDoaisdjASD AoisjdaSD
          DASDOIAJSDOIAJSDIOASJDIOAS
        </p>
      </div>
      <div className={S.destaque}>
         <h2>Em destaque</h2>
      </div>
      <div className={S.agoravai}>
      <div className={S.catalogoHome}>        
        {!!series && series.map((serie) =>{
          return (<MovieRow
            urlimg={serie.urlimg}
            title={serie.title}
            key={serie.id}
            />)
        })}
      </div>
      </div>
    </div>
  )
};

export default Home