import './NavBar.css';
import NavButton from './NavButton.js';
import NavBarMobile from './NavBarMobile';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 565);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 565);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <Link to='cindys-website/' className='home'>{props.firstName + ' ' + props.lastName}</Link>
      </div>


      <div>
        {isDesktop ? (
          <div className='nav-right'>
            <NavButton title="About" />
            <NavButton title="Works" />
            <NavButton title="Contact" />
          </div>
        ) : (
          <div className='nav-right'>
            <NavBarMobile />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;