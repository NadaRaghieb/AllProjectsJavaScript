import React from 'react';
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = ({ language }) => {
  const year = new Date().getFullYear();
  let footerText = 'Crafted with passion by [name] ©';

  if (language === 'ar') {
    footerText = "[name]صُنع بـ شغف من قِبل  ©"
  }

  return (
    
    <footer id="footer">
      <div className="container">
        <p className="footer__text">
          {footerText} {year}
        </p>
        <div className="footer__social">
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin className="footer__social-icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub className="footer__social-icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaSquareXTwitter className="footer__social-icon" />
          </a>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;