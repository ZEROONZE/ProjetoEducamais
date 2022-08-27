import styled from "styled-components";


export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
max-width: 100%;



.giff{
    display: flex;
    flex-direction: row;
    float: right;
    max-width: 100%;
  position: relative;
     text-align: center;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
}
.giff-text{
  background:#fff; padding:15px; position:relative; top:20px; left:120px; width:30%; float:left;
border-radius: 40px; 
margin-right: 40px;
text-align: center;

}
.giff-text2 p{
text-align: center;
align-items: center;
justify-content: center;


}
.giff-text22 {
    font-weight: 600;
    font-size: 30px;
}
.giff-text3 p {
text-align: center;
align-items: center;
justify-content: center;
font-size: 10px;
padding-top: 25px;


}

.giff-text p{

text-align: center;

}

.giff-text:before{ content:''; position: absolute; width:60px; height:20px; right:-10px; 
top:25px; background:#fff; 
-webkit-transform:rotate(45deg); 
}

.giff h2 {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    
}
.giff p{
    font-size: 23px;
    flex-direction: row;
    display: flex;
    margin-top: -41px;
}

.gif{
    width: 400px;
    z-index: 10;
}
.one, .two, .three {
border-radius: 50%;
z-index: 2;
padding: 4px;

}


.Class{
z-index: 1;
}
.ranking-img{
display: flex;
text-align: center;
align-items: center;
justify-content: center;
margin-left: -17px;
}
.ranking{
width: 30rem;
margin: auto;
background-color: #fff;
border-radius:30px ;
margin-top: 20px;
}
.rankingChildren{
padding: 20px;
text-align: center;
align-items: center;
justify-content: center;
margin: auto;
}
.rankingChildren h1 {
    text-align: center;
align-items: center;
justify-content: center; 
margin-top: 10px;
font-size: 28px;
}


.header{
    display: flex;
    flex-direction: row;
    float: right;
    width: 90%;
    margin: auto;
    padding: 30px;
    margin-top: 40px;
    border-radius: 30px;
  background-color: #fff;
  margin-bottom: 40px;
   text-align: center;
   align-items: center;
   justify-content: center;
}




.textP{
    display: flex;
    flex-direction: column;
}
.titutoVw{
margin: 10px;
margin-right: 20px;
font-size: 30px;
}
.cards{

flex-direction: row;
display: flex;
}
.video-content{

    flex-direction: row;
    display: flex;
}

.videoo{
    border-radius:15px ;
}
`;