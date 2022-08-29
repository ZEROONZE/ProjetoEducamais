import styled from "styled-components";

export const Container = styled.div`


* {
  box-sizing: border-box;
}



.cards {
  display: grid;
  grid-template-columns: repeat(4, 300px);
	grid-template-rows: 320px;
	grid-auto-columns: 100px;
	grid-auto-flow: column;
  grid-gap: 20px;
  grid-column: center;
  margin:auto;
  align-items: center;
    max-width: 1260px;
  text-align: center;
  padding: 0;
  list-style-type: none;
  overflow-x: auto;
}
.cards::-webkit-scrollbar{
  width: 5px;

}
.cards::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#fff;}

  .cards::-webkit-scrollbar-track {

  background-color: #2b2f41;
}   

.card {
  position: relative;
  display: block;
  height: 300px;  
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  grid-column: center;
 background-color: #fff;

}

.card__image {      
 width: 300px;

  height: 200px;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  
    
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
  background-color: #fff;
border-radius: 20px;
cursor: pointer;
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  height: 100px;
  transform: translateY(-100%);
  transition: .2s ease-in-out;

}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;

}

     

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%;
        
}

.card__title {
  font-size: 15px;
  margin-bottom: 1px;
  color: #7d7d7d;
  font-weight: 400;
  
}
.card__title big {
  font-weight: 550;
  color: red;
  font-family: "DIN OT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";  
  font-size: .8em; 
  color: #D7BDCA;  

}

.card__status {
  font-size: .8em;
  color: #D7BDCA;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #7d7d7d;
 font-family: sans-serif;
 font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
} 


@media (max-width: 780px) {



.cards{
  max-width: 100%;
  margin: 10px;
}


.cards {
  display: grid;
  grid-template-columns: repeat(4, 280px);

}
.card{
  height: 200px; 
  width:250px ;
  margin: 7px;
}
.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 2em;
  height: 100px;
  transform: translateY(-100%);
  transition: .2s ease-in-out;

}
.card__title{

  margin-bottom: -30px;
}
.card__thumb{
  display: none;
}

.card__image{
  width: 100%;
  height: 150px;
}
}


`;