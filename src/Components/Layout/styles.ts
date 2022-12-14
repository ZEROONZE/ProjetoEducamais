import styled from "styled-components";



/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 270px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
     'MH MH'
     'CT CT';
     height: 100vh;
     width: 100%;
    `;

