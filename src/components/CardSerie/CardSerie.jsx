import React from 'react';
// import { Link } from 'react-router-dom';

const CardSerie = ({ title, urlimg }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={urlimg}/>
    </div>
  )
}

export default CardSerie