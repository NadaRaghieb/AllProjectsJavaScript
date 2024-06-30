import React from 'react';
import CV from '../../assets/resume.pdf';

const CTA = ({ language }) => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        {language === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
      </a>
      <a href='#contact' className='btn btn-primary'>
        {language === 'ar' ? 'لنتحدث' : "Let's Talk"}
      </a>
    </div>
  );
};

export default CTA;