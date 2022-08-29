import styled from "styled-components";


export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
max-width: 100%;




.one, .two, .three {
border-radius: 50%;
z-index: 2;
padding: 4px;

}





.header{
    display: flex;
    flex-direction: row;
    float: right;
    width: 70%;
    margin: auto;
    padding: 30px;
    margin-top: 40px;
    border-radius: 30px;
  background-color: #fff;
  margin-bottom: 40px;
   text-align: center;
   align-items: center;
   justify-content: center;
   box-shadow: 0 15px 30px 1px grey;
}

.header:hover{
    box-shadow: 0px 0px 1px 1px grey;
    cursor: pointer;
}


.textP{
    display: flex;
    flex-direction: column;
}
.titutoVw{
margin: 10px;
margin-right: 20px;
font-size: 20px;
color: #7d7d7d; 
font-family: "DIN OT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

}

.titutoVr{
    color: #cc0000; 
    font-size: 29px;
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

@media (max-width: 780px) {
    .textP{
        display: none;
    }

    .video-content{
        display: none;  
    }

    .header{
        background-color: transparent;
        box-shadow: 0px 0px;
    }
}
`;