import styled from "styled-components";

export const Container = styled.div`


.slider{
    float: right;
    width: 100%;
    flex-direction: row;
    display: flex;
    background-color: #fff;
}
.slider-text{
flex-direction: row;
    width: 700px;
    float: right;
    margin-right: -100px;
}
.slider  h1 {
color: blue;
margin-right: -39rem;
text-align: center;
}
.slider  h2, p {
text-align: center;
margin-right: -39rem;
font-size: 26px;
margin-top: -17px;
}

.slider p {
font-size: 20px;
font-family: 'Roboto', sans-serif;
}
.slider5{
    float: right;
    position: absolute;
    z-index: 1;

}

.titulo{
    text-align:center;
     padding-top: 30px;

}
.titulo h1{
    text-align:center;
    padding-top: 30px;

}
.titulo strong{
    color:red;



}

.slide-img{
width: 100%;

}
.slider2{
width: 100%;

}
.slidermobile{
    display: none;

}

@media (max-width: 780px) {
    
    .slidermobile{
    display: block;
  width: 100%;
}
.slide-img{
    display: none;
}





}

`;
