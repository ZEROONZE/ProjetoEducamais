import React from "react";
import Content from "../Content";
import MainHeader from "../MainHeader/index";
import MenuBar from "../Menu/index";
import { Grid } from "./styles";

interface BaseLayoutProps {
    children?: React.ReactNode;
  }

const Layout: React.FC<BaseLayoutProps> = ({children}) => {

return(
<Grid>
<MainHeader />
<MenuBar/>
<Content>
        
            { children }
            
        </Content>
</Grid>


);


}

export default Layout;
