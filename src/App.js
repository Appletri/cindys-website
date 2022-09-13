import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Swire from './components/Portfolio/Works/Swire';
import Zions from './components/Portfolio/Works/Zions';
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollToTop from './components/Helper/ScrollToTop';
import Contact from './components/Contact/Contact';
import FF from './components/Portfolio/Works/FF';


class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar firstName="Cindy" lastName="Giang"/>
          </header>
          <div className='content'>
            <ScrollToTop>
              <Routes> 
                <Route path='/' element={<Home />} />
                <Route path='cindys-website/' element={<Home />} />
                <Route path='cindys-website/About' element={<About />} />
                <Route path='cindys-website/Works' element={<Portfolio />} />
                <Route path='cindys-website/Contact' element={<Contact />} />
                <Route path='cindys-website/swire-coca-cola' element={<Swire />} />
                <Route path='cindys-website/zions-bank' element={<Zions />} />
                <Route path='cindys-website/furrever-family' element={<FF />} />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>Project is still under development.</p>
                    </main>
                  }
                />
                <Route path='/*' element={<home />} />
              </Routes>
            </ScrollToTop>
          </div>
          <Footer />
        </div>    
      </BrowserRouter>
    );  
  }
}

export default App;
