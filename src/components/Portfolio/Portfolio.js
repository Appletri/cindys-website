import './Portfolio.css'
import Work from "./Work";

function Portfolio() {
  return (
    <div className='portfolio'>
      <Work title='Swire Coca-Cola Mobile and Web Application' year='2021' genre='Ecommerce' 
      about='Started in 1965, Swire Coca-Cola is now one of the biggest bottling companies in the United States. For being such a mature company Swire’s method for internal employee orders has since been dated. 
      Coke, Sprite, Fanta, and the goal for this project is to design an e-commerce mobile application for Swire employees to order their products and a management website for the administration to regulate orders, products, and payments.'/>
      <Work title='Zions Bancorporation Internal Website' year='2022' genre='Finance'
      about='nothing yet'/>
    </div>
  );
}

export default Portfolio;