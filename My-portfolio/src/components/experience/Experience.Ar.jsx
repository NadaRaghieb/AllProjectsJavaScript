import React from 'react';
import './experience.css';
import { FaAward } from 'react-icons/fa';
import { MdOutlineCastForEducation } from 'react-icons/md';
import LogoExpr from '../../assets/LogoExpr.png';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>المهارات التي لدي</h5>
      <h2>خبرتي</h2>

      <div className="container main__header-container">
        <div className="main__header-left">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h3>الخبرة</h3>
              <p>مطور برمجيات في شركة سالني آي تي<br />(يناير 2022 - يناير 2023)</p>
              <small>(كانون الثاني 2022 - كانون الثاني 2023)</small>

              <p>متدرب مطور ReactJS في أكاديمية تويق<br />(أكتوبر 2021 - فبراير 2022)</p>
              <small>(تشرين الأول 2021 - شباط 2022)</small>
            </article>

            <article className='about__card'>
              <MdOutlineCastForEducation className='about__icon' />
              <h3>التعليم</h3>
              <p>بكالوريوس علوم الحاسوب في جامعة نجران</p>
              <small>(2016 - 2021)</small>

              <p>دبلوم علوم الحاسوب في جامعة نجران</p>
              <small>(2012 - 2014)</small>
            </article>
          </div>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={LogoExpr} alt="شعار المهارات" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;