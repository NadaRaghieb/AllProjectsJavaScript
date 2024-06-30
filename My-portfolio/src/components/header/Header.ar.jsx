import React from 'react';
import './header.css';
import CTA from './CTA';
import MyLogo from '../../assets/HeaderLogo.png';

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h3>ندى ال رغيب</h3>
          <h1>مرحبًا بك في محفظتي الشخصية!</h1>
          <p>
            يسعدني أن تكون هنا، تستكشف رحلتي الإبداعية وإنجازاتي. هذا الموقع هو المكان الذي أعرض فيه مجموعة من أفضل أعمالي ومشاريعي السابقة. ستجد مجموعة متنوعة من التصاميم والمبادرات التي تعكس رؤيتي الفنية ومهاراتي المهنية.
          </p>
          <p>
            استمتع بتصفح محفظتي. إذا كان لديك أي أسئلة أو استفسارات، فلا تتردد في التواصل. أنا متحمس للعمل على مشاريع جديدة والتعاون معك في المستقبل القريب.
          </p>
          <p>
            شكرًا لوقتك واهتمامك، وأتطلع إلى مشاركة أعمالي معك.
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
  );
};

export default Header;