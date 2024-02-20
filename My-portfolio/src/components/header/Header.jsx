import React from 'react'
import './header.css'
import CTA from './CTA'
import MyLogo from '../../assets/HeaderLogo.png'
// import HeaderSocials from './HeaderSocials'
// import { Link } from 'react-router-dom'



const Header = () => {
  
  return (
    
   
    <header className="main__header">
     
    <div className="container main__header-container">
      <div className="main__header-left">
        
        <h3>Nada Alraghieb</h3>
        <h1>Welcome to my personal portfolio!</h1>
        <p>
        I'm thrilled to have you here, exploring my creative journey and accomplishments. This website is a space   where I showcase a collection of my best work and past projects. You'll find a diverse range of designs and endeavors that reflect my artistic vision and professional skills.
        </p>
        <p>Enjoy browsing through my portfolio. If you have any questions or inquiries, feel free to reach out. I'm excited to work on new projects and collaborate with you in the near future.</p>
        <p>Thank you for your time and interest, and I look forward to sharing my work with you.</p>
        <CTA/>
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
  )
}

export default Header