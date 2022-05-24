import { Link } from 'react-router-dom';

function NavButton(props) {
  return (
    <Link to={props.title} className="nav-button">{props.title}</Link>
  );
}

export default NavButton;