import Intro from './Intro/Intro.js';
import ParallaxImage from './ParallaxImage/ParallaxImage.js';
import FeaturedWorks from './FeaturedWorks/FeaturedWorks.js';

function Home() {

  //this bit of code handles the animation for featured works when entering viewport
  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      // entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn')
      }
    })
  }

  // const Obs = new IntersectionObserver(inViewport);
  // const obsOptions = {};
  // const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  // ELs_inViewport.forEach(EL => {
  //   Obs.observe(EL, obsOptions);
  // });
  setTimeout(()=> {
    const options = {};
    const elements = document.querySelectorAll('.work');
    const header = document.querySelector('.FWheader');
    const myObserver = new IntersectionObserver(inViewport, options)
    myObserver.observe(header);
    elements.forEach(element => {
      myObserver.observe(element)
    })
  }, 300)
  
  return(
    <div className='home-page'>
      <Intro firstName="Cindy" lastName="Giang"/>
      <ParallaxImage img="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80" info='placeholder img'/>
      <FeaturedWorks />
    </div>
  )
}

export default Home;