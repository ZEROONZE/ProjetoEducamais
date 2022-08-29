import React from 'react'
import Card from '../Card';
import Card2 from '../Card2';
import Slider from '../Slider';

import { Container } from './styles';


const Video = () => {
  return (
    <Container>

      <Slider />
      <Card />
      <Card2 />
    
    <div className='header'> 
    <div className='cards'>
      <div  className='textP'>
    
      <h1 className='titutoVr' >COMO CRIAR ENDEREÇO</h1>
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