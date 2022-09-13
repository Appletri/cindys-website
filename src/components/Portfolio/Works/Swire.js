import './works.css';
import introImg from '../../../assets/images/Mobile-coke.f1268b9c.webp';
import mockPhone1 from '../../../assets/images/coke-mobile.90ae2512.webp';
import isometricImg from '../../../assets/images/coke-isometric.a4fcb228.webp';
import WireFramingImg from '../../../assets/images/SwireMobileWireframe.3cb4dc5a.webp';
import FigmaEmbed from '../../Helper/FigmaEmbed';
import ImageSlider from './ImageSlider.js';

function Swire() {
  return (
    <div className='main'>
      <div className='overview'>
        <div className='head'>
          <div className='text'>
            <h1>Swire Coca-Cola Mobile and Web Application</h1>
            <div className='header-under'>
              <h4>Roles</h4>
              <div className='roles'>
                <p>UI/UX Designer</p>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
          <div className='head-image'>
            <img src={introImg} alt='iphone 13 mock up'/>
          </div>
        </div>
      </div>
      <div className='timeline'>
      
      </div>

      <div className='work-body'>
        <section>
          <p> 
            Swire Coca-Cola offers employee pricing for all their products every month. 
            At the beginning of every ordering period, each employee will receive an email 
            with an excel sheet of all the products that are available for that purchase period. 
            Employees can easily mark the quantity for each product and the excel sheet will 
            calculate the total cost they need to pay. The excel sheet is then sent back to the 
            Swire admins for order processing. 
          </p>

          <p>
            One Swire administrator is on the other end receiving 75-200 e-mails containing 
            the same excel sheet but with different products marked. Each excel sheet is opened 
            and the content is moved to a master order – another excel sheet. When all orders are manually accounted for the excel sheet is then sent to the warehouse for packaging. 
          </p>

          <p>
            On order pick-up day, the same administrator is responsible for accepting payments. 
            Employees will be knocking on the admin’s door every few minutes to drop off a check 
            or cash. A small slip with the order will be stamped with the words “Paid”. It is the 
            employee's responsibility to drive to the warehouse and gather all their products to 
            take home. 
          </p>

          <p>
            This process is then repeated for next month. 
          </p>
        </section>

        <div className='mock-image'>
          <img src={mockPhone1} alt='5 UI designs for coca cola mobile' />
        </div>
        <div className='mock-image'>
          <img src={isometricImg} alt='isometric designs for coca cola mobile' />
        </div>

        <h3>Problem</h3>
        <p>
          User research interviews were done to better understand the pain points of both the 
          admin and employees using the current system. This helps uncover the goals and needs 
          each user needs to make this product successful. 
        </p>

        <h3>User Flow</h3>
          <ImageSlider />
        <h3>Wireframing Mobile</h3>
        <div className='mock-image'>
          <img src={WireFramingImg} alt='wire framing blueprints for mobile design' />
        </div>

        <section>
          <h3>Analysis</h3>
          <h3>User Research Outcome</h3>
          <div>
            <h4>Employee Interviews</h4>
            <ul>
              <li>
                <strong>Pick-up Map:</strong> Better instructions and a map were needed. Many new employees struggled to find the garage entrance to the pick-up facility
              </li>
              <li>
                <strong>Order History:</strong> many employees emphasize the hassle of going over the excel sheet to find the products they are looking for. Thus, order history with a reorder button was suggested
              </li>
              <li>
                <strong>Payment:</strong> Ability to pay using a credit card, inconveniences to remember and bring cash or check
              </li>
              <li>
                <strong>Refund:</strong> Many employees have experienced times where they missed the pick-up window and had to eat the cost or find the admin to push the order for the next period
              </li>
              <li>
                <strong>Notification:</strong> Notifies the user when the order has been submitted, processed, and ready for pick-up
              </li>
            </ul>

            <h4>Administrative and Stakeholder Interview</h4>
            <ul>
              <li>
                <strong>Payment:</strong> MUST accept credit card payments to eliminate foot traffic to the admin’s door during pick-up
              </li>
              <li>
                <strong>Refund:</strong> Ability to initiate a refund for orders that didn’t get picked up
              </li>
              <li>
                <strong>Report:</strong> Ability to generate order reports to send to the warehouse
              </li>
              <li>
                <strong>Change Product:</strong> Inventory changes by the hour therefore, the admin needed a way to change product availability
              </li>
            </ul>
          </div>
        </section>
        <section>
          <p>
            After gathering insights from the interview, my team evaluated the original scope, which only included the mobile application. As a team, we all agree that a web application will be needed to  provide the optimal outcome for this project. The web application will help management control the monthly products and orders coming from the mobile application. It was the missing piece that will truly help solve the current struggles. 
          </p>
          <p className='quote'>
            <i><strong>“Minimum Viable Product (MVP)</strong> is a development technique in which a new product is introduced in the market with basic features, but enough to get the attention of the consumers”</i>
          </p>
          <p>
            Due to the time constraint and added scope an MVP was placed to protect the project from scope creep.
          </p>

        </section>

        <FigmaEmbed url="https://www.figma.com/proto/CzodLex4agkfxMiVhCBIxz/CokeNowMobile?node-id=664%3A6588&scaling=scale-down&page-id=132%3A1058&starting-point-node-id=664%3A6588&show-proto-sidebar=1&fbclid=IwAR1Lzmk2YLSAHDBHWNsbEMBlli2CoP7ME4F15Xne7W55cmiWv8xYCmZ9Mn0" />

        <FigmaEmbed url="https://www.figma.com/proto/tn1XhoRQOaAjxOZmDkjLbX/SwireAdminWeb?node-id=215%3A1940&scaling=scale-down&page-id=215%3A1939&starting-point-node-id=215%3A1940&show-proto-sidebar=1" />

       

      </div>
    </div>
  )

}

export default Swire;