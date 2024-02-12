import React from 'react'
import './about.css'
import MyLogo from '../../assets/MyLogo.png'
import {FaAward} from 'react-icons/fa' 
import {MdOutlineCastForEducation} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'
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
         <div className="about__cards">
           <article className='about__card'>
             <FaAward className='about__icon'/>
             <h5>Experience</h5>
            <small>Software Developer at SlneeIT Company <br/> A three-month trainee at Tuwaiq Academy BootCamp JS</small>
           </article>

           <article className='about__card'>
             <MdOutlineCastForEducation className='about__icon'/>
             <h5>Education</h5>
            <small>Bachelor of Computer Science at Najran University<br/>2017-2021</small>
           </article>
           <article className='about__card'>
             <VscFolderLibrary className='about__icon'/>
             <h5>Projects</h5>
            <small>5 Completed</small><br/>
            
           </article>
         </div>
         <p>
           Computer Science graduate with aim to seek a position where I can utilise my knowledge and contribute effectively, while gaining experience and refining my skills. I believe in team work to deliver the tasks assigned and achieving the goals with in specified time frame.
        </p> 

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
    </section>
  )
}

export default About