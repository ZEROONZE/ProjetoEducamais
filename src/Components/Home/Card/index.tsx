

import React from "react"
import { Container } from "./styles";
const Card = () => {
    return (
        <Container>

			<section className="geral">
    <div id="container">	
	
	<div className="product-details">
		<br></br>

	
		<div className="information1"> 
			<p className="information">
Agora o cliente que usa o app Minha Claro pode ganhar um par de ingressos para assistir a um jogo da Copa do Mundo FIFA 2022™ com tudo incluso.
<br/>Para participar, basta ser cliente Claro e fazer o cadastro na promoção, cada produto que você tem vira um número da sorte. Tem sorteio toda semana.
</p>

</div>

			
</div>
	
<div className="product-image">
	
	<img   className="image" src="copa.png" alt="" />
	


</div>







</div>

<div className='ranking'>
        <div className='rankingChildren'>
        <h1>MELHORES % CONTRATOS</h1>
        <div className='ranking-img'>
		<div>
        <img className='one' src="lucas1.jfif" width={80} style={{ marginBottom: '-10px', marginLeft: '0px', }} /> </div>
        <div>
        <img className='two'src="lucas.jpg" width={90} style={{}} /> </div>
		<div>
        <img className='three' src="lucas4.jpeg" width={80} style={{marginBottom: '-10px'}} /></div>
		<div className='Class1'>
        <img className='Class' src="ranking3.png"  width={300} style={{marginBottom: -40}} /></div>
      </div>
      </div>
	  </div>
	  </section>

    </Container>
        )

    }
export default Card;
