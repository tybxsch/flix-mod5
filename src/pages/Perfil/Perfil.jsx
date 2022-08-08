import React from 'react'
import Login from '../../assets/Login.png'
import S from '../Perfil/Perfil.module.css'

const Perfil = () => {
  return (
    <div className={S.bloco}>
      <div className={S.container}>
          <img src={Login} alt="" className={S.image}/>
          <div className={S.blocoTexto}>
   <h2 className={S.blocoTitulo}>NOME</h2>
   <input type="text" name="" id="" />
   <h2 className={S.blocoTitulo}>BIO</h2>
   <input type="text" name="" id="" />
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
   <h2>0</h2>
   </div>
<hr />
   <div className={S.blocoPontuacoes}><h1 >Publicações</h1>
  <h2>10</h2>
  </div>
<hr />
  <div className={S.blocoPontuacoes}><h1 >Assistir</h1>
  <h2>30</h2>
  </div>

  </div>    
  </div>
    <div>


    </div>
    </div>

    )
}

export default Perfil;