import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sliderBar';
import SubMenu from './submenu';
import { IconContext } from 'react-icons/lib';
import { Nav, NavIcon, SidebarWrap } from './styles1'; 


const animate = keyframes`
 0% {
transform: translate(-100px);
opacity: 0;
 }
 50%{
    opacity: 3;
 }
 100%{
    transform: translate(0px);
    opacity: 1;
 }
`;

export const SidebarNav = styled.nav`
margin-top: 40px;
padding: 12px;
  background: #2b2f41;
  width: 250px;
  overflow-x: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  animation: ${animate} .5s;
  left: ${({ sidebar }) => (sidebar ? '0' : '0')};
  transition: 350ms;
  z-index: 10;
  ::-webkit-scrollbar{
  width: 10px;

}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#fff;}

::-webkit-scrollbar-track {
  
  background-color: #2b2f41;
} 
`;


const MenuBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
       
      <IconContext.Provider  value={{ color: ''  }}   >
   
        <Nav>
          <NavIcon  to='#'>
            <FaIcons.FaBars id="btnMenu"  onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav   sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon   to='#'>
             
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index}>

              
              </SubMenu>
                     
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default MenuBar;
