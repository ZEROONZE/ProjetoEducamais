


import { Routes, Route,  } from 'react-router-dom'
import { ImageSlider } from '../Cadastro/ImageSlider';
import Video from '../Home/Videos';
import Layout from '../Layout';
import {SliderData }from '../Cadastro/SliderData'
const AppRoutes: React.FC = () => {


 
     
    return (
    
    

        <Layout>
      
   

    <Routes>
    <Route path="/"   element={<Video />} />
    <Route path="/ClaroTVHD"   element={<ImageSlider slides={SliderData}/>} />
   
    </Routes> 
    </Layout>
);

}
export default AppRoutes;
  