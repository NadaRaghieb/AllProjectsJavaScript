import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { PiCertificateBold } from 'react-icons/pi';

const Nav = ({language}) => {
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = (link) => {
    setActiveNav(link);
    setShowNav(false);
  };

  return (
    <>
    
    <button
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      className={`nav-toggle ${language === 'ar' ? 'nav-toggle--arabic' : ''}`}
      onClick={toggleNav}
    >
      <span className="nav-toggle__bar"></span>
      <span className="nav-toggle__bar"></span>
      <span className="nav-toggle__bar"></span>
    </button>

      <nav className={`nav ${showNav ? 'nav--open' : ''}`}>
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className={activeNav === '#home' ? 'active' : ''}
        >
          <AiOutlineHome className="nav-icon" />
        </a>
        <a
          href="#about"
          onClick={() => handleLinkClick('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser className="nav-icon" />
        </a>
        <a
          href="#experience"
          onClick={() => handleLinkClick('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <HiOutlineBriefcase className="nav-icon" />
        </a>
        <a
          href="#education"
          onClick={() => handleLinkClick('#education')}
          className={activeNav === '#education' ? 'active' : ''}
        >
          <HiOutlineAcademicCap className="nav-icon" />
        </a>
        <a
          href="#courses"
          onClick={() => handleLinkClick('#courses')}
          className={activeNav === '#courses' ? 'active' : ''}
        >
          <PiCertificateBold className="nav-icon" />
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail className="nav-icon" />
        </a>
        <a
          href="#footer"
          onClick={() => handleLinkClick('#footer')}
          className={activeNav === '#footer' ? 'active' : ''}
        >
          <HiOutlineGlobeAlt className="nav-icon" />
        </a>
      </nav>
    </>
  );
};

export default Nav;