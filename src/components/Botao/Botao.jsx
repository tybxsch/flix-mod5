import React from 'react'
import S from './Botao.module.css'

const Botao = ({text}) => {
  return (
    <button className={S.botao}>
      {text}
    </button>
  )
}

export default Botao