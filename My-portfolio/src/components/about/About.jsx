import React from 'react';
import './about.css';
import MyLogo from '../../assets/AboutMeLogo.png';
import { Image } from 'react-bootstrap';

// عنصر About هو القسم الذي يعرض معلومات عن المستخدم
const About = () => {
  return (
    <section id='about'>
      {/* عنوان القسم */}
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            {/* عرض صورة المستخدم */}
            <Image src={MyLogo} alt='about Image'/>
          </div>
        </div>

        <div className="about__content">
          {/* نص يصف المستخدم واهتماماته */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, mollitia! Deserunt quod qui impedit facilis quam consectetur quos, adipisci quas ut error? Esse tempora quis ea cupiditate asperiores necessitatibus neque?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, mollitia! Deserunt quod qui impedit facilis quam consectetur quos, adipisci quas ut error? Esse tempora quis ea cupiditate asperiores necessitatibus neque?</p>          
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, mollitia! Deserunt quod qui impedit facilis quam consectetur quos, adipisci quas ut error? Esse tempora quis ea cupiditate asperiores necessitatibus neque?</p>          
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, mollitia! Deserunt quod qui impedit facilis quam consectetur quos, adipisci quas ut error? Esse tempora quis ea cupiditate asperiores necessitatibus neque?</p>          
          
          {/* زر الاتصال */}
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;