import './FeaturedWorks.css';
import {WorkLeft, WorkRight} from './Work.js';
import cokeImg from '../../../assets/SwireCokeMobile/1LoginScreen.png'

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
      image="https://images.squarespace-cdn.com/content/v1/58c43562a5790aa56a886623/1599302022064-JUJ9CW18IIX4GAMDHLJN/image-asset.jpeg"
      />
      <WorkRight 
      name="Zions Bank" 
      about="Analyze, UI/UX Designing, User Research" 
      image="https://cdn2.hubspot.net/hubfs/263750/Zions-Bank-1-1.jpg"
      link='zions-bank'
      />
    </div>
  );
}

export default FeaturedWorks;