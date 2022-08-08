import React from 'react'
import Login from '../../assets/Login.png'
import S from '../Perfil/Perfil.module.css'

const Perfil = () => {
  return (
    <div className={S.bloco}>
      <div className={S.container}>
          <img src={Login} alt="" className={S.image}/>
          <div className={S.blocoTexto}>
   <h1 className={S.blocoTitulo}>NOME</h1>
   <input type="text" name="" id="" />
   <h1 className={S.blocoTitulo}>BIO</h1>
   <input className={S.blocoBio} type="text" name="" id="" />
   </div>
   </div>
   <div className={S.containerDois}>
   <li>
    Configurações
   <hr></hr>
   <ul>Conta</ul>
   <ul>Privacidade</ul>
   <ul>Notificação</ul>
   <ul>Tema</ul>
   <ul>Ajuda</ul>
   </li>
    <div className={S.pontuacoes}> 
   
   <div className={S.blocoPontuacoes}><h1 >Follower</h1>
   <h1>0</h1>
   </div>
<hr />
   <div className={S.blocoPontuacoes}><h1 >Publicações</h1>
  <h1>10</h1>
  </div>
<hr />
  <div className={S.blocoPontuacoes}><h1 >Assistir</h1>
  <h1>30</h1>
  </div>

  </div>    
  </div>
    <div>


    </div>
    </div>

    )
}

export default Perfil;