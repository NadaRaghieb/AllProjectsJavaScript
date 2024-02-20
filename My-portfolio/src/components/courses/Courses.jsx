import React from 'react'
import './courses.css'
import {BiCheck} from 'react-icons/bi'
const Courses = () => {
  return (
    <section id='courses'>
      <h5>What I Learn</h5>
      <h2>Courses</h2>

      <div className="container courses__container">
        <article className='courses'>
          <div className="courses__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className='courses__list'>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/GTLMJ3FQGA3H'  target="_blank" rel="noreferrer">Build Dynamic User Interfaces (UI) for Websites</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/A24EGNHVVGBW'  target="_blank" rel="noreferrer">Create High-Fidelity Designs and Prototypes in Figma</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/8GVUPR7AV9AQ'  target="_blank" rel="noreferrer">Web Design: Wireframes to Prototypes</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/FV6T36T9R89P'  target="_blank" rel="noreferrer">UX Design Fundamentals</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/GNE8NG8JYM83'  target="_blank" rel="noreferrer">Visual Elements of User Interface Design</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/YHAHNB739449'  target="_blank" rel="noreferrer">Visual Elements of User Interface Design</a></p>
            </li>
          </ul>
        </article>
        {/*======================== End OF SERVICE ========================*/}
        <article className='courses'>
          <div className="courses__head">
            <h3>Web Development</h3>
          </div>
          <ul className='courses__list'>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/FPXDEKNUL76P'  target="_blank" rel="noreferrer">Web Design: Strategy and Information Architecture</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/TM3UHBU5FAYF'  target="_blank" rel="noreferrer">Interactivity with JavaScript</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/RLZN48VBBZ42'  target="_blank" rel="noreferrer">Introduction to CSS3</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/LT4P8YXTBDBC'  target="_blank" rel="noreferrer">Web Application Development with JavaScript and MongoDB</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/88P4WB52RQMP'  target="_blank" rel="noreferrer">Web Design for Everybody Capstone</a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href='https://www.coursera.org/account/accomplishments/records/UMQ6TJLKF4XW'  target="_blank" rel="noreferrer">Introduction to HTML5</a></p>
            </li>
          </ul>
        </article>
        {/*======================== END OF WEB DEVELOPMENT ========================*/}
        <article className='courses'>
          <div className="courses__head">
            <h3>Database</h3>
          </div>
          <ul className='courses__list'>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href=''  target="_blank" rel="noreferrer"></a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href=''  target="_blank" rel="noreferrer"></a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href=''  target="_blank" rel="noreferrer"></a></p>
            </li>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href=''  target="_blank" rel="noreferrer"></a></p>
            </li>
          </ul>
        </article>
        {/*======================== END OF CONTENT CREATION ========================*/}
      
      </div>
    </section>
  )
}

export default Courses