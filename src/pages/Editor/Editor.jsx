import React, { useState, useEffect} from 'react'
import Ficha from '../../components/Ficha/Ficha'
import { getSeries } from '../../services/api';

// EDITAR E DELETAR FILMES

const Editor = () => {
  const [ficha, setFicha] = useState([]);

  const require = async () => {
    const response = await getSeries();
    console.log(response);
    setFicha(response);
  };

  useEffect(() => {
    require();
   }, []);

  return (
    <div>
      {!!ficha && ficha.map((ficha)=>{
        return (
          <Ficha
            key={ficha.id}
            id={ficha.id}
            title={ficha.title}
            genre={ficha.genre}
          />
        )
      })
      }
    </div>
  )
}

export default Editor