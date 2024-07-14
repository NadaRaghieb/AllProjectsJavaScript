import React from 'react'
import './header.css'
import CTA from './CTA'
import MyLogo from '../../assets/HeaderLogo.png'


const Header = () => {
  
  return (
    
   <div id='home'>
    <header className="main__header">
     
    <div className="container main__header-container">
      <div className="main__header-left">
        
        <h3>My Name</h3>
        <h1>Welcome to my personal !</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis veritatis at, soluta, praesentium dolor commodi quis, facilis nisi aliquam fugiat pariatur sunt labore provident veniam accusamus vel! Quasi, possimus error.        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis veritatis at, soluta, praesentium dolor commodi quis, facilis nisi aliquam fugiat pariatur sunt labore provident veniam accusamus vel! Quasi, possimus error.        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis veritatis at, soluta, praesentium dolor commodi quis, facilis nisi aliquam fugiat pariatur sunt labore provident veniam accusamus vel! Quasi, possimus error.        </p>
        <CTA />
      </div>
     
      <div className="main__header-right">
        <div className="main__header-circle">
        <div className="main__header-image">
          <img src={MyLogo} alt="Main Header Img"/>
        </div>
        </div>
      </div>
    </div>

   </header> 
   </div>
  )
}

export default Header