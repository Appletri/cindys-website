import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Swire from './components/Portfolio/Works/Swire';
import Zions from './components/Portfolio/Works/Zions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollToTop from './components/Helper/ScrollToTop';
import Contact from './components/Contact/Contact';
import FF from './components/Portfolio/Works/FF';
import { useEffect, useState } from 'react';


function App() {
  const originalTheme = 'rgb(94, 199, 173'
  const [color, setColor] = useState(originalTheme);
  
  const handleColorChange = (value) => {
    setColor(value)
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--main-accent-color',color)
  }, [color] );

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar firstName="Cindy" lastName="Giang"/>
        </header>
        <div className='content'>
          <ScrollToTop>
            <Routes> 
              <Route path='/' element={<Home colorChange={handleColorChange} color={originalTheme}/>} />
              <Route path='cindys-website/' element={<Home colorChange={handleColorChange} color={originalTheme}/>} />
              <Route path='cindys-website/About' element={<About colorChange={handleColorChange} color={originalTheme}/>} />
              <Route path='cindys-website/Works' element={<Portfolio colorChange={handleColorChange} color={originalTheme}/>} />
              <Route path='cindys-website/Contact' element={<Contact colorChange={handleColorChange} color={originalTheme}/>} />
              
              <Route path='cindys-website/swire-coca-cola' element={<Swire colorChange={handleColorChange}/>} />
              <Route path='cindys-website/zions-bank' element={<Zions colorChange={handleColorChange}/>} />
              <Route path='cindys-website/furrever-family' element={<FF colorChange={handleColorChange}/>} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Project is still under development.</p>
                  </main>
                }
              />
              <Route path='/*' element={<Home colorChange={handleColorChange} color={originalTheme}/>} />
            </Routes>
          </ScrollToTop>
        </div>
        <Footer />
      </div>    
    </BrowserRouter>
  );  
  
}

export default App;
