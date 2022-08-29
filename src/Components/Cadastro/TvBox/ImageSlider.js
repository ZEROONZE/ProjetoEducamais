import React, { useState } from 'react'
import { SliderDataa } from './SliderData'
import {FaArrowAltCircleRight, FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import { Container } from './styles'




export const ImageSliderr = ({slides}) => {
const [current, SetCurrent] = useState(0)
const length = slides.length
const nextSlide = () => {
    SetCurrent(current === length -1 ? 0 : current + 1);
};

const prevSlide = ( ) => {
    SetCurrent(current ===  0 ? length -1 : current -1 );
};

console.log(current)



if(!Array.isArray(slides) || slides.length <=0) {
    return null;
}





  return (
    <Container>   
        <div className='rowww'>
        <div className='Tutora'>
            <h1>Como cadastrar <strong>CLARO CLARO BOX</strong></h1>
        <img className='gif' src="https://media.baamboozle.com/uploads/images/127129/1620846298_154986_gif-url.gif" />
        </div>  


 <section className='slider'>
 
    <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
    <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
 {SliderDataa.map((slide, index) => {

    return (
        <div className={index === current ? 'slide active' : 'slide'}     
       key={index}>
           {index  === current && (<img src={slide.image} alt='Cadastro' className='image'/>)}     
        </div>
    )
    
    
 




 })}
 
 
 </section>
 </div>
 </Container>
  )
}
