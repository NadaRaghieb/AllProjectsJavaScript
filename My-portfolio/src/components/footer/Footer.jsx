import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return( 
  <footer id='footer'>
    
    {`Made with love © Nada Alraghieb ${year} `}
   
        <a className='icons-btn' href='https://linkedin.com/in/nada-alraghieb' target="_blank" rel="noreferrer"><FaLinkedin className='icon-btn'/></a>
        <a className='icons-btn' href='https://github.com/NadaRaghieb' target="_blank" rel="noreferrer"><FaGithub className='icon-btn'/></a>
       
    </footer>
)}

export default Footer
