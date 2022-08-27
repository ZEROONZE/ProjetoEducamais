import React from 'react'

import { Container } from './styles';


const Video = () => {
  return (
    <Container>

      <div className='giff'>
        <div className='giff-text'>
        <h2 >Olá, Vendedor!</h2>
        <br/>
        
        <div className='giff-text2'>
        <p className='giff-text22'>Preparado para gerar mais contratos ?</p>
        <div className='giff-text3'>
        <p>Então vamos lá, aqui você vai aprender, cadastrar
          <br/>Liberar pendências, criar endereço, 
          <br/>e muito mais!
          </p>
          <h3/>
          </div>
          </div>
        </div>
      <img className='gif' src="https://media.baamboozle.com/uploads/images/127129/1620846298_154986_gif-url.gif" />

      <div className='ranking'>
        <div className='rankingChildren'>
        <h1>MELHORES % CONTRATOS</h1>
        <div className='ranking-img'>
        
        <img className='one' src="logoVia.png" width={110} style={{marginBottom: -90}} />
        <div>
        <img className='two'src="logoVia.png" width={120} style={{marginBottom: -20}} />
        </div>
        <img className='three' src="logoVia.png" width={100} style={{marginBottom: -135}} />
        </div>
        <img className='Class' src="ranking.png"  width={400}/>
      </div>
      </div>
      </div>
      
    <div className='header'> 
    <div className='cards'>
      <div  className='textP'>
    
    <h1 className='titutoVr' >SE LIGA NESSA DICA PARA GERAR MAIS CONTRATOS</h1>
<p className='titutoVw' >Pergunte ao cliente se sua residência é de esquina ou
não, isso nos ajuda a localizar seu endereço no Netsales.
Verifique ruas paralelas caso não ache o endereço.
Para verificação de endereço após a criação, sempre
pesquise pela proposta para não cancelar o endereço
em análise.</p>
</div>
    <div className='video-content'>
    <object className="videoo" width="425" height="350">
      
<param name="movie"  value="CriaçãoEndereço.mp4" />
<embed src="CriaçãoEndereço.mp4" type="application/x-shockwave-flash" className="videoo" width={400} height={200} />
</object>
</div>






</div>


</div>
</Container>
  )
}

export default Video;