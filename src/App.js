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
                <Route path='Home' element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Works' element={<Portfolio />} />
                <Route path='Works/swire-coca-cola' element={<Swire />} />
                <Route path='Works/zions-bank' element={<Zions />} />
                <Route path='Home/swire-coca-cola' element={<Swire />} />
                <Route path='Home/zions-bank' element={<Zions />} />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
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
