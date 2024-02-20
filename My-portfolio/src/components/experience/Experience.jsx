import React from 'react'
import './experience.css'
import {FaAward} from 'react-icons/fa' 
import {MdOutlineCastForEducation} from 'react-icons/md'
import LogoExpr from '../../assets/LogoExpr.png'
const Experience = () => {
  return (
    <section id='experience'> 
     <h5>What Skills I Have</h5>
     <h2>My Experience</h2>
     

 
    {/* <div className="experience__img"> 
        <div className="experience__image">
              <Image src={LogoExpr} alt='experience Image'/>
        </div>
    </div> 

    
     
       <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          {/* </div>
       </div>
        */}
         
    <div className="container main__header-container">
      <div className="main__header-left">
         <div className="about__cards">
           <article className='about__card'>
             <FaAward className='about__icon'/>
             <h3><b/>Experience</h3>
            <p>Software Developer<br/>at SlneeIT Company <br/></p><small>( Jan 2022 - Jan 2023 )</small>
            
            <p>Intern ReactJS Developer<br/>at Tawaiq Academy BootCamp<br/></p><small>( Oct 2021 - Feb 2022 )</small>
           
           </article>

           <article className='about__card'>
             <MdOutlineCastForEducation className='about__icon'/>
             <h3> Education</h3>
            <p>Bachelor of Computer Science<br/> at Najran University </p><small>(2 016 - 2021 )</small>
            
            <p> Diploma of Computer Science<br/> at Najran University </p><small>( 2012 - 2014 ) </small>
            
           </article>
          
         </div>
      </div>
      <div className="main__header-right">
        <div className="main__header-circle">
        <div className="main__header-image">
          <img src={LogoExpr} alt="Skills Logo "/>
        </div>
        </div>
      </div>
    </div>
          
      
    
    </section>
  )
}

export default Experience