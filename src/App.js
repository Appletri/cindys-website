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


class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar firstName="Cindy" lastName="website"/>
          </header>
          <div className='content'>
            <ScrollToTop>
              <Routes> 
                <Route path='cindy-website' element={<Home />} />
                <Route path='cindy-website/Home' element={<Home />} />
                <Route path='cindy-website/About' element={<About />} />
                <Route path='cindy-website/Works' element={<Portfolio />} />
                <Route path='cindy-website/Contact' element={<Contact />} />
                <Route path='cindy-website/Works/swire-coca-cola' element={<Swire />} />
                <Route path='cindy-website/Works/zions-bank' element={<Zions />} />
                <Route path='cindy-website/Home/swire-coca-cola' element={<Swire />} />
                <Route path='cindy-website/Home/zions-bank' element={<Zions />} />
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
