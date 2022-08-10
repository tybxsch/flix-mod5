import React from 'react'
import S from './Botao.module.css'

const Botao = ({text, onclick}) => {
  return (
    <button className={S.botao} onClick={onclick}>
      {text}
    </button>
  )
}

export default Botao