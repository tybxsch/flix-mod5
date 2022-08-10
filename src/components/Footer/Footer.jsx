// logo
//  todos os direitos reservados
import logo from '../../assets/Logo_Oficial.png'
import React from 'react'
import S from '../Footer/footer.module.css'

export const Footer = () => {
  return (
    <footer className={S.footer}>
        <img src={logo} alt="" className={S.logo} />
        <div className={S.blocoTexto}>
        <p className={S.text}>Todos os direitos reservados©</p>
        <p className={S.text}>Para Fins Educativos</p>
        </div>
    </footer>
  )
}

export default Footer;