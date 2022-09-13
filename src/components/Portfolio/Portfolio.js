import './Portfolio.css'
import Work from "./Work";
import cokeMockUP from '../../assets/images/Minimal-Screen-Mockup-CocaCola.7206a71c.webp';
import ffMockUP from '../../assets/images/MockupFF.66f98d4d.webp';


function Portfolio() {
  return (
    <div className='portfolio'>
      <Work title='Swire Coca-Cola Mobile and Web Application' year='2021' genre='Ecommerce' link='/cindys-website/swire-coca-cola'
      about='Started in 1965, Swire Coca-Cola is now one of the biggest bottling companies in the United States. For being such a mature company Swire’s method for internal employee orders has since been dated. 
      Coke, Sprite, Fanta, and the goal for this project is to design an e-commerce mobile application for Swire employees to order their products and a management website for the administration to regulate orders, products, and payments.'
      img={cokeMockUP}/>
      <Work title='Furrever Family' year='2021' genre='Adoption' link='/cindys-website/furrever-family'
      about='An app that is designed to help owners easily rehome and adopt pets in nearby proximity. This application allows owners to interact with pets’ families on a personal level. At adoption facilities, pre and post-boarding paperwork is done with the employees at the shelter – making it harder for families to really answer all the questions needed to understand the pet before going to the new home. With this mobile application, the new owners can read about the pet and reach out to the current family to better understand the habits, health conditions, and personality of the pet before bringing them home.' img={ffMockUP}/>
      {/* <Work title='Zions Bancorporation Internal Website' year='2022' genre='Finance' link='/cindys-website/zions-bank'
      about='nothing yet'/> */}
    </div>
  );
}

export default Portfolio;