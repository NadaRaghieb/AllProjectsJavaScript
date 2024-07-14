import React from 'react';
import Cards from './Cards'; // Assuming Cards component handles education details
import LogoEdu from '../../assets/LogoExpr.png';

const Education = () => {
  return (
    <div>
      <section id='education'>
        <h5>المسيرة التعليمية</h5>  {/* My Educational Background */}
        <h2>التعليم الخاص بي</h2>  {/* My Education */}
        <div className="container main__header-container">
          <div className="main__header-left">
            <div className="main__header-circle">
              <div className="main__header-image">
                <img src={LogoEdu} alt="شعار التعليم" />  {/* Education Logo */}
              </div>
            </div>
          </div>
          <div className="main__header-right">
            {/* Replace Cards components with your education details */}
            <Cards
              title="الشهادة والتخصص"  
              content=" اسم الجامعة وسنة التخرج"  
            />
            <Cards
               title="الشهادة والتخصص"  
               content=" اسم الجامعة وسنة التخرج"  
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
