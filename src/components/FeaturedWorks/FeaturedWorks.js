import './FeaturedWorks.css';
import {WorkLeft, WorkRight} from './Work.js';

function FeaturedWorks() {
  return (
    <div className='featured-works'>
      <h1>Featured Works</h1>
      <WorkRight name="Swire Coke-Cola" about="A UI/UX Design, Development" image="https://www.albawaba.com/sites/default/files/styles/d08_standard/public/im_new/areej/Cocacola_shutterstock_26oct20.jpg?h=82f92a78&itok=YSn-hPq4"/>
      <WorkLeft name="Design West" about="Architecture Design, Drafting" image="https://images.squarespace-cdn.com/content/v1/58c43562a5790aa56a886623/1599302022064-JUJ9CW18IIX4GAMDHLJN/image-asset.jpeg"/>
      <WorkRight name="Zions Bank" about="Analyze, UI/UX Designing, User Research" image="https://cdn2.hubspot.net/hubfs/263750/Zions-Bank-1-1.jpg"/>
    </div>
  );
}

export default FeaturedWorks;