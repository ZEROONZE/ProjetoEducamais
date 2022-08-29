import styled from "styled-components";

export const Container = styled.div`
flex-direction: row;

.ranking{
padding: 10px;

text-align: center;
align-items: center;
justify-content: center;
text-align: center;
margin: auto;

width: 30%;
height: 340px;

}
.ranking-img{
  
 
 flex-direction: row;
 display: inline-block;


}
.ranking-img div{
  display: inline-block;
}
.rankingChildren h1{
  color: #cc0000;
 
  align-items: center;
text-align: center;
justify-content: center;

}
.Class1{
margin-bottom: -50px;

align-items: center;
text-align: center;
justify-content: center;
margin-left: -30px;
margin: auto;
}
.two, .one, .three{
  box-shadow: 0 10px 10px 1px grey;
}

.Class{
  margin-left: 6px;
  padding: 10px;
  align-items: center;
text-align: center;
justify-content: center;
}
.two:hover{
  box-shadow: 0px 0px 1px 1px grey;
  cursor: pointer;
  transition: .3s;
  
}
.one:hover{
  box-shadow: 0px 0px 1px 1px grey;
  cursor: pointer;
  transition: .3s;
  
}
.three:hover{
  box-shadow: 0px 0px 1px 1px grey;
  cursor: pointer;
  transition: .3s;
  
}
#container{
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.90);
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
  margin: 5em auto;
  height: 25rem;
  width: 50rem;
margin-left: 2rem;
flex-direction: row;
}
#container:hover{
  box-shadow: 0px 0px 1px 1px grey;
 cursor: pointer;
  transition: .3s;
}

.geral{
flex-direction: row;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}
.product-details {
  position: relative;
  text-align: center;
  align-items: center ;
  justify-content: center;
  text-align: left;
  overflow: hidden;
  margin-left: 10px;
  height: 100%;
  float: left;
  width: 40%;

}

#container .product-details h1{
  font-family: 'Bebas Neue', cursive;
  display: inline-block;
  position: relative;
  font-size: 25px;
  color: #344055;
  margin: 0;
  text-align: center;
  align-items: center ;
  justify-content: center;

}
.information{
  text-align: center;
 align-items: center;
 justify-content: center;
 margin: auto;
 padding: -20px;
}
.information1 p{

font-size: 18px;

}
#container .product-details h1:before{
  position: absolute;
  content: '';
  right: 0%; 
  top: 0%;
  transform: translate(25px, -15px);
  font-family: 'Bree Serif', serif;
  display: inline-block;
  background: #ffe6e6;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  color: white;
  margin: 0;
  animation: chan-sh 6s ease infinite;

}






.hint-star {
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
}


#container .product-details > p {
 margin-top: -10px;
  text-align: center;
  font-size: 23px;
  color: #7d7d7d;

}
.control{
  position: absolute;
  bottom: 20%;
  left: 22.8%;

}
.btn {

  transform: translateY(0px);
  transition: 0.3s linear;
  background:  #809fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: #eee;
  padding: 0;
  margin: 0;

}



.btn span {
  font-family: 'Farsan', cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin:0;

}
.btn .price, .shopping-cart{
  background: #333;
  border: 0;
  margin: 0;
}

.btn .price {
  transform: translateX(-10%); padding-right: 15px;
}

.btn .shopping-cart {
  transform: translateX(-100%);
  position: absolute;
  background: #333;
  z-index: 1;
  left: 0;
  top: 0;
}

.btn .buy {z-index: 3; font-weight: bolder;}

.btn:hover .price {transform: translateX(-110%);}

.btn:hover .shopping-cart {transform: translateX(0%);}



.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;

margin-right: -30px;
  width: 56%;
  display: inline-block;
}

#container img {width: 100%; height: 300px;


}
#container{
  width: 750px; height: 300px;

}


.info h2 {text-align: center}
.product-image:hover .info{transform: translateX(0);}

.info ul li{transition: 0.3s ease;}
.info ul li:hover{transform: translateX(50px) scale(1.3);}


@media (max-width: 780px) {

.geral{
  display: flex;
  flex-direction: column;
  margin: 13px;
}

.ranking{
padding: 10px;

text-align: center;
align-items: center;
justify-content: center;
text-align: center;
margin: auto;
margin-bottom: 40px;
width: 100%;
height: 340px;

}

.ranking-img{
  
  text-align: center;
align-items: center;
justify-content: center;
text-align: center;
  flex-direction: column;
margin-left: 0px;
 margin-bottom: 20px;
 
 }
 .card{
  padding: 10px;
 }
.information1 p{
text-align: center;
align-items: center;
justify-content: center;
  font-size: 16px;

}
.information{
  text-align: center;
  text-align: center;
align-items: center;
justify-content: center;
}

#container img {width: 100%; height: 100%;


}

.product-details{
  width: 360px;
 padding: 1px;

}
#container{
  width: 100%;
   height: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 0;


}

.product-image{
width: 100%;

}
.image{

}
}


`;