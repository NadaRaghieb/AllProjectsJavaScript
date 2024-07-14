import React from 'react';
import './header.css';
import CTA from './CTA';
import MyLogo from '../../assets/HeaderLogo.png';

const Header = () => {
  return (
    <div id='home'>
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h3>الاسم</h3>
          <h1>مرحبًا بك في ملفي الشخصي!</h1>
          <p>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة
          </p>
          <p>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة
          </p>
          <p>.أبجد هوز حطى كلمن هوى ، إجراءات المراقبة
          </p>
          
          <CTA language="ar" />
        </div>

        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={MyLogo} alt="صورة رئيسية رئيسية" />
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;