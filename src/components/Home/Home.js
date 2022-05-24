import Intro from './Intro/Intro.js';
import ParallaxImage from './ParallaxImage/ParallaxImage.js';
import FeaturedWorks from './FeaturedWorks/FeaturedWorks.js';
import React, { Component }  from 'react';

function Home() {
  return(
    <div className='home-page'>
      <Intro firstName="Cindy" lastName="Giang"/>
      <ParallaxImage />
      <FeaturedWorks />
    </div>
  )
}

export default Home;