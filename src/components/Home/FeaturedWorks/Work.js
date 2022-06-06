import { Link } from 'react-router-dom';
import './FeaturedWorks.css';
// import { useState, useEffect } from 'react';

function WorkRight(props) {

  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className='work' data-inviewport='fade-in'>
      <Link to={props.link}>
        <div className='work-img-left'>
            <img src = {props.image} alt = "" ></img>
        </div>
      </Link>
      <div className='work-text-right'>
        {/* <h3 style={{ transform: `translate(-${ Math.sqrt(offsetY) * 2.7}%)`}}>{props.name}</h3>
        <p style={{ transform: `translate(-${ Math.sqrt(offsetY) * 2.2}%)`}}>{props.about}</p> */}
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        <div className='arrow'></div>
      </div>
    </div>
  );
}

function WorkLeft(props) {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className='work' data-inviewport='fade-in'>
      <div className='work-text-left'>
        {/* <h3 style={{ transform: `translate(${ Math.sqrt(offsetY) * 2.9}%)`}}>{props.name}</h3>
        <p style={{ transform: `translate(${ Math.sqrt(offsetY) * 2.4}%)`}}>{props.about}</p> */}
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        <div className='arrow'></div>
      </div>
      <div className='work-img-right'>
        <img src = {props.image} alt = ""></img>
      </div>
    </div>
  );
}

export {WorkLeft, WorkRight};