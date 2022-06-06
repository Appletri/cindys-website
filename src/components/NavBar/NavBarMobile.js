import NavButtonMobile from './NavButtonMobile';

function NavBarMobile() {
  function displayLinks() {
    const navMobile = document.querySelector('.nav-mobile');
    navMobile.classList.toggle('show');
  }

  return(
    <div>
      <div onClick={displayLinks} className="nav-hamburger">+</div>
      <div className="nav-mobile">
        <div onClick={displayLinks} className="nav-close">x</div>
        <NavButtonMobile title="About" />
        <NavButtonMobile title="Works" />
        <NavButtonMobile title="Contact" />
      </div>
    </div>
  )
}

export default NavBarMobile;