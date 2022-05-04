import './ParallaxImage.css';

function ParallaxImage() {
  return(
    <div className= 'wrapper'>
      <div className='parallax'>
        <img className = 'background' src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80" alt=''></img>
      </div>
    </div>
  );
}

export default ParallaxImage;