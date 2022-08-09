import React from 'react';
import S from '../MovieRow/movieRow.module.css'

const MovieRow = ({ urlimg }) => {
  return (
    <div className={S.movieRow}>
      <img src={urlimg}/>    
    </div>
  )
}

export default MovieRow