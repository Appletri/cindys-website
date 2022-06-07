import './About.css';
import resume from '../../assets/GiangUXResume.pdf'

function About() {
  function handleClick() {
      window.open(resume,"_blank");
  }
  return(
    <div className="about">
      <div>
        <h1>About</h1>
        <p>During the pandemic, I went back for a Masters in Information Systems. 
          While in the program, I had the opportunity to work with Swire Coca-Cola to build 
          an internal e-commerce mobile application and administrative web application. 
          I was fascinated by how UI/UX design was so similar to architectural design – 
          the only differences are my deliverables are now digitized. </p>
        <p>After graduation, I was fixated on becoming an analyst and didn’t 
          even consider UI/UX design as a career; therefore, I accepted an offer 
          as a Business Information Analyst. With the given background in architecture 
          and projects with Swire, my first project on the job was to build an internal 
          website for the Customer Data Integration Hub (CDI Hub). As an analyst, I was still 
          required to perform the analyst task. However, every time I switch gears to work on 
          the website there is a burst of energy inside of me where hours would go by and it would 
          only feel like minutes. That is when I realized I needed to turn user experience designing 
          into my career. </p>
      </div>
      <div>
        <h1>What got me into UI/UX</h1>
        <p>As a student, I sat through multiple sponsored projects – 
          but Swire stood out when the words, “Application Design” was mentioned. 
          I came from an architectural background, I love user research, I love design, 
          and I love building. A month later, I found myself sitting in front of Zoom with 
          Swire stakeholders and three other students discussing 
          potential outcomes for this project.</p>
      </div>
      <div onClick={handleClick} className='resume'>Resume</div>
    </div>
  )
}

export default About;