import './NavBar.css';
import NavButton from './NavButton.js';

function NavBar(props) {
  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <p>{props.firstName + ' ' + props.lastName}</p>
      </div>
      <div className='nav-right'>
        <NavButton title="About" />
        <NavButton title="Work" />
        <NavButton title="Writing" />
      </div>
    </div>
  );
}

export default NavBar;