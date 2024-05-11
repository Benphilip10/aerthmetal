
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { HomePage, AboutUs, ServicesPage, SustainabilityPage, LithiumPage, GoldPage } from './pages';
import { NavBar } from './components';

function App() {

  return (

    <BrowserRouter>

      <NavBar/>
      
      <Routes>
      <Route path='/' element= {<HomePage/>}/>
      <Route path='/about-us' element= {<AboutUs/>}/>
      <Route path='/services-page' element={<ServicesPage/>} />
      <Route path='/sustainability-page' element={<SustainabilityPage/>} />
      <Route path='/product-lithium' element={<LithiumPage/>} />
      <Route path='/product-gold' element={<GoldPage/>} />
      </Routes>


    </BrowserRouter>
    
  )
}

export default App
