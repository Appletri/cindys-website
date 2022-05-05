import './App.css';
import Navbar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import ParallaxImage from './components/ParallaxImage/ParallaxImage';
import FeaturedWorks from './components/FeaturedWorks/FeaturedWorks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar firstName="Cindy" lastName="Giang"/>
        <Intro firstName="Cindy" lastName="Giang"/>
        <ParallaxImage />
        <FeaturedWorks />
      </header>
    </div>
  );
}

export default App;
