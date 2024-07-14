import React from 'react';
import './experience.css';
import ActiveCard from './ActiveCard';
import LogoExpr from '../../assets/LogoExpr.png';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>ما المهارات التي أمتلكها</h5>
      <h2>خبراتي العملية</h2>
      <div className="container main__header-container">
        <div className="main__header-left">
          <ActiveCard title="المنصب الوظيفي" content="اسم الشركة وسنة بداية العمل ونهايته" />
          <ActiveCard title="المنصب الوظيفي" content="اسم الشركة وسنة بداية العمل ونهايته" />
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
