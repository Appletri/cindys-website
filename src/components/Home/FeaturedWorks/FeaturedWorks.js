import './FeaturedWorks.css';
import {WorkLeft, WorkRight} from './Work.js';
import cokeImg from '../../../assets/images/1LoginScreen.f5b1d0e8.webp';
import ffImg from '../../../assets/images/Furrever Family Parallax.50dddca0.webp'

function FeaturedWorks() {

  return (
    <div className='featured-works'>
      <h1 className='FWheader'>Featured Works</h1>
      <WorkRight 
      name="Swire Coke-Cola" 
      about="A UI/UX Design, Development" 
      image={cokeImg}
      link='swire-coca-cola'
      />
      <WorkLeft 
      name="Furrever Family" 
      about="Mobile App, UI/UX Design" 
      image={ffImg}
      link='furrever-family'
      />
      <WorkRight 
      name="Zions Bancorporation" 
      about="Analyze, UI/UX Designing, User Research" 
      image="https://cdn2.hubspot.net/hubfs/263750/Zions-Bank-1-1.jpg"
      link='zions-bankdd'
      />
    </div>
  );
}

export default FeaturedWorks;