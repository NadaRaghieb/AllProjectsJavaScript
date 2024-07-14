import React from 'react';
import Cards from './Cards'
import LogoEdu from '../../assets/LogoExpr.png';

const Education = () => {
  return (
    <div>
      <section id='education'>
        <h5>My Educational Background</h5>
        <h2>My Education</h2>
        <div className="container main__header-container">
          <div className="main__header-left">
            <div className="main__header-circle">
              <div className="main__header-image">
                <img src={LogoEdu} alt="Education Logo" />
              </div>
            </div>
          </div>
          <div className="main__header-right">
            
            <Cards
              title="Degree and major"
              content="University Name"
            />
            <Cards
               title="Degree and major"
              content="University Name"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
// Commit: Added educational background section