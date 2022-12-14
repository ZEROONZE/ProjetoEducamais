
import styled,{css, keyframes} from "styled-components";
import { Link } from 'react-router-dom';


interface IContainerProps {
    menuIsOpen: boolean;
}
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
export const Nav = styled.div`
 background-color: #000;
 
  height: 70px;
  position: absolute;
 
  display: flex;
  width: 90px;
  justify-content: flex-start;
  align-items: center;
  transition: .2s;
  animation: ${animate} .5s;
  #btnMenu{ 
    color:#fff;
    font-size: 40px;
    transition: .2s;
    z-index: 400;
    margin-left: 9rem;
    }




`;
export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: .2s;
    
`;



 export const SidebarWrap = styled.div`
  width: 100%;
  transition: .2s;

`;






















export const IconContext = styled.div`


.btn-Menu{
color: ${props => props.theme.colors.white}
}
`;

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    z-index: 0;
    position: relative;
    animation: ${animate};
    height: 100%;
    overflow-y: scroll;
    color: ${props => props.theme.colors.white};
  

    .menulado{
        height: 100%;
     
        
    }
    .dropdown-menu{
    display: none;
}

.dropdown-menu1{
    display: block;
}
   
    @media (max-width: 600px){
        overflow-y: hidden;
        padding-left:7px;
        position: fixed;
        z-index: 0;
        
      
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
       margin-left: -3px;
        ${props => !props.menuIsOpen && css`
        border: none;
        border-bottom: 0px solid ${props => props.theme.colors.gray};
        animation: ${animate};
        
        `};
    }
    
    
    .DASHBOARD{
    font-weight: bold;
    padding: 20px;
    margin-right: 4px;
}



    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.gray};
    a { 
text-decoration: none;
color: ${props => props.theme.colors.white};
margin: 7px 0;
display: flex;
align-items: center;
padding: 6px;
padding-left: 17px;
font-size: 18px;
font-weight: bold;
transition: opacity .3s;
animation: ${animate};
transition: all 0.2s;
.segundo{
    margin-left: 5px;
    padding-left: 5px;
}
.segundoo{
    margin-left: 7px; 
    padding-left: 5px;
}
    .icon{
        font-size: 25px;
    }

&:hover{
    opacity: .7;
    transform: translateX(10px);
}
>svg{
    font-size: 18px;
    margin-right: 5px;
    
}





}

`;
export const Header = styled.header`
display: flex;
align-items: center;
height: 70px;
padding: 5px;
animation: ${animate};
background-color: transparent;

.nome-logo{
    
  color: ${props => props.theme.colors.white};
    font-family: 'Edu QLD Beginner', cursive;
    font-size: 24px;
}


`;


export const LogImg = styled.img`
height: 40px;
width: 40px;
@media (max-width: 600px){
    height: 25px;
    width: 25px;
   display: none;

}

`;


export const Title = styled.h3`
    color: ${props => props.theme.colors.success};
   
    @media (max-width: 600px){
        display:none;
        width: 100px;
        font-size: 14px;
        margin-left:5px;

    }

`; 


export const MenuContainer = styled.nav`
display: flex;
flex-direction: column;
margin-top: 50px;
animation: ${animate};

width: 100%;
max-height: 100%;
.relatoriomenuPC{
    display: none;
}
@media (max-width: 600px){
    overflow-y: scroll;
width: 100%;
max-height: 100%;
.relatoriomenu{
        display: none;
            }
.relatoriomenuPC{
    display: block;
  
    padding: 10px;
    margin-right: 4px;


}




        }



        
`;
export const MenuItemLink = styled.a``;

export const ToggleMenu = styled.button`
 animation: ${animate};
width: 45px;
height: 40px;
display: none;
border-radius: 5px;
font-size: 22px;
background-color: ${props => props.theme.colors.warning};
color: #fff;
transition: opacity .3s;
    &:hover{
        opacity: 0.7;
    }
   
    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
        animation: ${animate};
    }



`;