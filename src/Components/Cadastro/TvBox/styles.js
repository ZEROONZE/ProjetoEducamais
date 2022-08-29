import styled,{keyframes}from "styled-components";

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;
export const Container = styled.div`
.slider {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image{
    width: 1000px;
    height: 500px;
    border-radius: 30px;
    box-shadow: 0 10px 10px 1px grey;
}

.image:hover{
    box-shadow: 0 1px 1px 1px grey;
   cursor: pointer;
}

.right-arrow{
    position: absolute;
    top:50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 20;
    cursor: pointer;
    user-select: none;
}
.left-arrow{
    position: absolute;
    top:50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 20;
    cursor: pointer;
    user-select: none;
}
.slide{
    transition-duration: 1s ease;
}

.slide.active{
    transition-duration: 1s;
    transform: scale(1.08);

}



.Tutora{
    position: relative;
    top:20px;
    text-align: center;
   align-items: center;
   justify-content: center;
display: flex;
flex-direction: row;
margin-bottom: -60px;

}
.Tutora h1{
text-align: center;
   align-items: center;
   justify-content: center;
}
.Tutora h1 strong{
color: red;
}
.gif{
   
    top:-60px;
    display: flex;
flex-direction: row;
    z-index: 30;
width: 200px;
}
@media (max-width: 780px) {
    flex-direction: column;
    display: grid;
    overflow-x: scroll;
    .slider{
        height: 799px;
      margin-bottom: 40px;
      margin-top: -90px;
      margin: 10px;
   
    }
   
    .Tutora h1{
   margin-bottom: -10px;
    }
.image{
    height: 300px;
    width: 799px;
    margin: 30px;
    margin-top: -19rem;
}
::-webkit-scrollbar{
  width: 10px;
z-index: 30;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#fff;}

::-webkit-scrollbar-track {

  background-color: #2b2f41;
}   

.right-arrow{
    
    top:25%;
   
}
.left-arrow{
    top:25%;


}
}




`;
