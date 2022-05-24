import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar firstName="Cindy" lastName="Giang"/>
          </header>
          <div className='content'>
            <Routes> 
              <Route path='/' element={<Home />} />
              <Route path='Home' element={<Home />} />
              <Route path='About' element={<About />} />
              <Route path='Works' element={<Portfolio />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>    
      </BrowserRouter>
    );  
  }
}

export default App;
