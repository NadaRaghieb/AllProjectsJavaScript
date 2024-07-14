import React, { useState } from 'react';
import './courses.css';
import { BiCheck } from 'react-icons/bi';
import { UDesigner, webDeveloper, image } from '../../Data/db'; // Assuming data files for English and Arabic translations
import { UDesignerAr, webDeveloperAr, imageAr } from '../../Data/db.ar'; // Assuming separate data file for Arabic translations

const Courses = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section id='courses'>
      <h5>{language === 'ar' ? 'ما تعلمته' : 'What I Learn'}</h5>  {/* Translated title */}
      <h2>{language === 'ar' ? 'المسارات التعليمية' : 'Courses'}</h2>  {/* Translated heading */}

      <div className="container courses__container">
        <article className='courses'>
          <div className="courses__head">
            <h3>{language === 'ar' ? 'تصميم واجهة المستخدم/تجربة المستخدم' : 'UI/UX design'}</h3>  {/* Translated section title */}
          </div>
          {language === 'ar'
            ? UDesignerAr.map((data, key) => {
                return (
                  <ul className='courses__list' key={key}>
                    <li>
                      <BiCheck className='courses__list-icon' />
                      <p>
                        <a href={`${data.certificate}`} target="_blank" rel="noreferrer">
                          {data.courseNameAr || data.courseName}  {/* Use translated name if available */}
                        </a>
                      </p>
                    </li>
                  </ul>
                );
              })
            : UDesigner.map((data, key) => {
                return (
                  <ul className='courses__list' key={key}>
                    <li>
                      <BiCheck className='courses__list-icon' />
                      <p>
                        <a href={`${data.certificate}`} target="_blank" rel="noreferrer">
                          {data.courseName}
                        </a>
                      </p>
                    </li>
                  </ul>
                );
              })}
        </article>

        <article className='courses'>
          <div className="courses__head">
            <h3>{language === 'ar' ? 'تطوير المواقع الالكترونية' : 'Web Developer'}</h3>  {/* Translated section title */}
          </div>
          {language === 'ar'
            ? webDeveloperAr.map((data, key) => {
                return (
                  <ul className='courses__list' key={key}>
                    <li>
                      <BiCheck className='courses__list-icon' />
                      <p>
                        <a href={`${data.certificate}`} target="_blank" rel="noreferrer">
                          {data.courseNameAr || data.courseName}  {/* Use translated name if available */}
                        </a>
                      </p>
                    </li>
                  </ul>
                );
              })
            : webDeveloper.map((data, key) => {
                return (
                  <ul className='courses__list' key={key}>
                    <li>
                      <BiCheck className='courses__list-icon' />
                      <p>
                        <a href={`${data.certificate}`} target="_blank" rel="noreferrer">
                          {data.courseName}
                        </a>
                      </p>
                    </li>
                  </ul>
                );
              })}
        </article>
        <article className='courses'>
          <div className="courses__head">
            <h3>{language === 'ar' ? 'قواعد البيانات' : 'Database'}</h3>  {/* Translated section title */}
          </div>
          {language === 'ar'
            ? imageAr.map((item) => {
                return (
                  <ul className='courses__list' key={item.id}>
                    <li>
                      <BiCheck className='courses__list-icon' />
                      <p onClick={() => handleImageClick(item)}>
                        {language === 'ar' ? item.imageNameAr || item.imageName : item.imageName}  {/* Use translated name if available */}
                      </p>
                    </li>
                  </ul>
                );
              })
            : image.map((item) => {
                return (
                  <ul className='courses__list' key={item.id}>
                    <li>
                      <BiCheck className='courses__list-icon' />
                      <p onClick={() => handleImageClick(item)}>
                        {item.imageName}
                      </p>
                    </li>
                  </ul>
                );
              })}
          {selectedImage && <img src={selectedImage.img} alt={selectedImage.imageName} />}
        </article>
      </div>
    </section>
  );
};

export default Courses;
