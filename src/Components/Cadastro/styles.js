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
    height: 600px;
    border-radius: 30px;

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


`;
