import './works.css';
import introImg from '../../../assets/images/MockupFF.66f98d4d.webp';
import isometricImg from '../../../assets/images/MockupFFiso.fb6b6c35.webp';
import persona1 from '../../../assets/images/Chad.250eeb08.webp';
import persona2 from '../../../assets/images/Mei.7da74601.webp';
import persona3 from '../../../assets/images/Mindy.01f545ef.webp';
import userFlow from '../../../assets/images/UserFlow.946ce499.webp';
import erd from '../../../assets/images/Physical ERD.6bbab31a.webp';


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

            <h4>Overview</h4>
            <p>
              This project is a novel idea created and used solely for IS 6410- System Analysis and Design course final project assignment. The learning objective for this project is to expose students to define an issue, perform user research, and build a mock product to solve the situation.
            </p>
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

          <p className='important'>
            <i><strong>
            “How did you adopt them?”
            </strong></i>
          </p>

          <p>
            Each of us shared different stories about how we got our pets therefore we decided to look into different adoption programs and scenarios. 
          </p>

          <p>
            In 2019, an adoption study found that the top form of pet adoption is done at a shelter, totaling 44% of the completed study conducted by the American Pet Products Association. Realizing that the main form of adoption is less than half of how people give up/adopt their pet is alarming. We thought we can make this process easier by providing a platform for owners to adopt pets using their own mobile devices.  
          </p>
        </section>

        <h3>Persona</h3>
          <div className='panels'>
            <img src={persona1} alt='a man and his dog with his profile description'></img>
            <img src={persona2} alt='an old woman with their profile description'></img>
            <img src={persona3} alt='a young woman and their profile description'></img>
          </div>

        <h3>User Flow</h3>
          <div className='big-image'>
            <img src={userFlow} alt='flow chart depicting user flow'></img>
          </div>
        <h3>Data Mapping</h3>
          <div className='big-image'>
            <img src={erd} alt='flow chart depicting Physical ERD'></img>
          </div>
        <h3>High-Fidelity Design</h3>
          <div className='mock-image'>
            <img src={isometricImg} alt='isometric designs for coca cola mobile' />
          </div>
        <h3>Takeaways</h3>
        <p>
          This project was my first mobile proposal project. The goal was for us to experience the different phases of building a system. During the project, I learned there are many things a UX designer needs to be aware of. For the interview, we quickly dived into user interviews and got over 100 results within a few days. Looking back, I prefer doing more research and running the user interviews in small batches to give us more time between each session to analyze the answers and refine the interview questions to better answer the questions we are really seeking to get a solution to. However, being the first project we thought it was best to get the MOST results upfront so we can get the most accurate dataset possible. 
        </p>
      </div>
    </div>
  )

}

export default FF;