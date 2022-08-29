

import React from "react"
import { Container } from "./styles";
const Card2 = () => {
    return (
        <Container>
    <ul className="cards">
  <li className="cardd">
    <a  className="card">
      <img src="images.png" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="disney.png"><path /></svg>                     
          <img className="card__thumb" src="claro.png" alt="" />
          <div className="card__header-text">
          <p className="card__title"><big>PLUTO tv </big> No claro Box</p>          
          
          </div>
        </div>
        <p className="card__description">Cliente claro box acessam mais de 60 canais gratuitamente.</p>
      </div>
    </a>      
  </li>
  <li>
    <a  className="card">
      <img src="plus.jpg" className="card__image" alt="" />
      <div className="card__overlay">        
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="claro.png" alt="" />
          <div className="card__header-text">
            <p className="card__title"><big>DISNEY+ </big> Agora está na claro</p>

          </div>
        </div>
        <p className="card__description"><strong>SUPERNOVIDADE</strong> para seus clientes o melhor da <strong>Disney+</strong> agora está na claro.</p>
      </div>
    </a>
  </li>
  <li>
    <a  className="card">
      <img src="paramount.png" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="claro.png" alt="" />
          <div className="card__header-text">
		  <p className="card__title"><big>PARAMOUNT+ </big> Na claro</p>   
        
          </div>
        </div>
        <p className="card__description">Filmes direto do cinema, séries, kids, documentários para acessar de onde quiser na Claro tv+ na TV, app e web.</p>
      </div>
    </a>
  </li>
  <li>
    <a  className="card">
      <img src="net.png" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="claro.png" alt="" />
          <div className="card__header-text">
		  <p className="card__title"><big>NETFLIX </big> Na claro</p>   
          </div>          
        </div>
        <p className="card__description">Lembre-se que o ideal é cadastrar o mesmo email da conta Netflix, para manter o mesmo histórico.</p>
      </div>
    </a>
  </li>    
</ul>

    </Container>
        )

    }
export default Card2;
