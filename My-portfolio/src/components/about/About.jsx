import React from 'react'
import './about.css'
import MyLogo from '../../assets/AboutMeLogo.png'
// import {FaAward} from 'react-icons/fa' 
// import {MdOutlineCastForEducation} from 'react-icons/md'
import { Image } from 'react-bootstrap'
const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

      <div className='container about__container'>
       <div className='about__me'>
          <div className="about__me-image">
            <Image src={MyLogo} alt='about Image'/>
          </div>
      </div>

       <div className="about__content">
        
        <p>Allow me to introduce myself, starting from the beginning of my educational journey up until my latest work experience at Salni Tech. I initially pursued a degree in Physics during my university years for three years. However, I wasn't fulfilled with this specialization, so I made the decision to withdraw from university and continue my studies in Computer Science.</p>
        <p>It was during my diploma studies in Computer Science that I discovered my passion for programming, particularly when encountering errors in code. I found joy in troubleshooting and analyzing the issues, and then resolving them. This led me to decide to pursue my bachelor's degree after graduating from Najran University. At that time, I was desperate to find employment, and that's when I came across an advertisement for the Tawiyq 1000 Bootcamps.</p>
        <p>I chose the JavaScript track, and it proved to be a unique experience for me. My love for web development grew stronger, and I underwent three months of intensive training. Following that, I was fortunate to be employed by Salni Tech. Although my role didn't align directly with my prior experience, they provided me with a new opportunity to learn ERPNext.</p>
        <p>During my time at Salni Tech, I learned the Python language through ERPNext training. I genuinely enjoyed the learning experience and am grateful for the opportunities and knowledge I gained from every employee in the company. I never stopped learning, and I continued to expand my skills to include React.js.</p>
        <p>I trained on various projects through platforms like YouTube, Udemy, CodePen, and Fuel. I also participated in virtual work experiences through Misk Hub. Now, I am actively seeking a position that will help me achieve my professional dreams and provide me with opportunities to learn, grow, and share my expertise with a team.</p>
        <p>If you are interested in connecting for potential collaboration or job opportunities, you can find my contact information below. Thank you for your time, and I look forward to the possibility of working together.</p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
    </section>
  )
}

export default About