import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { CgWebsite } from "react-icons/cg";
import {BiMessageSquareDetail} from 'react-icons/bi'
import { PiCertificateBold } from 'react-icons/pi';
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='/'onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome className='nav-icon'/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser className='nav-icon'/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook className='nav-icon'/></a>
      <a href='#courses' onClick={()=>setActiveNav('#courses')} className={activeNav === '#courses' ? 'active' : ''}><PiCertificateBold  className='nav-icon' /></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail className='nav-icon'/></a>
      <a href='#footer' onClick={()=>setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><CgWebsite className='nav-icon'/></a>

    </nav>
  )
}

export default Nav