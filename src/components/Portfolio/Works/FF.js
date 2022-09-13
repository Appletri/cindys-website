import './works.css';
import introImg from '../../../assets/images/MockupFF.66f98d4d.webp';
import isometricImg from '../../../assets/images/MockupFFiso.fb6b6c35.webp';
import FigmaEmbed from '../../Helper/FigmaEmbed';

function FF() {
  return (
    <div className='main'>
      <div className='overview'>
        <div className='head'>
          <div className='text'>
            <h1>Furrever Family</h1>
            <div className='header-under'>
              <h4>Roles</h4>
              <div className='roles'>
                <p>UI/UX Designer</p>
                <p>System Analysis</p>
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
            As a group of students, we were given the task to come up with a project that will improve a current problem we are facing but strongly believe a mobile application can help fix. As we sat on the zoom call brainstorming ideas for the project, “Housing?” “Hunger?”  “Finance?” “Sleep?” “Dating?” – none of these suggestions felt right. As we were about to call it for the night, the group went on a tangent about our pets. “Ohh you have a pet?” “What is your cat/dog’s name?” “How old are they?” “Can I see them?” but the question that turned the night around was…
          </p>

          <p>
            “How did you adopt them?”
          </p>

          <p>
            Each of us shared different stories about how we got our pets therefore we decided to look into different adoption programs and scenarios. 
          </p>

          <p>
            In 2019, an adoption study found that the top form of pet adoption is done at a shelter, totaling 44% of the completed study conducted by the American Pet Products Association. Realizing that the main form of adoption is less than half of how people give up/adopt their pet is alarming. We thought we can make this process easier by providing a platform for owners to adopt pets using their own mobile devices.  
          </p>
        </section>

        <div className='mock-image'>
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
      </div>
    </div>
  )

}

export default FF;