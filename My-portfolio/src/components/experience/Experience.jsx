import React from 'react';
import './experience.css';
import ActiveCard from './ActiveCard';
import LogoExpr from '../../assets/LogoExpr.png';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container main__header-container">
      <div className="main__header-left">
      <ActiveCard title="Software Developer" content="SlneeIT Company (January 2022 – January 2023)" />
      <ActiveCard title="Intern Full Stack Developer" content="Tawaiq Academy Bootcamp (Oct 2021 - Feb 2022)" />
      </div>
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={LogoExpr} alt="Skills Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
// Commit: Added experience section with active cards