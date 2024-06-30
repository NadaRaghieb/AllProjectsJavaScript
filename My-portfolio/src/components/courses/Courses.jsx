import React, { useState } from 'react';
import './courses.css'

import {BiCheck} from 'react-icons/bi'
import {UDesigner, webDeveloper, image} from '../../Data/db'
const Courses = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <section id='courses'>
      <h5>What I Learn</h5>
      <h2>Courses</h2>

      <div className="container courses__container">
        <article className='courses'>
          <div className="courses__head">
            <h3>UI/UX design</h3>
          </div>
          {UDesigner.map((data,key)=>{
            return(
          <ul className='courses__list' key={key}>
          <li>
            <BiCheck className='courses__list-icon'/>
             <p><a href={`${data.certificate}`}  target="_blank" rel="noreferrer">{data.courseName}</a></p>
          </li>
          </ul>
          )})}
        </article>
        {/*======================== End OF SERVICE ========================*/}
        <article className='courses'>
          <div className="courses__head">
            <h3>Web Development</h3>
          </div>
          {webDeveloper.map((data,key)=>{
            return(
            <ul className='courses__list' key={key}>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p><a href={`${data.certificate}`}  target="_blank" rel="noreferrer">{data.courseName}</a></p>
            </li>
            </ul>
            )
          })}
          
          
        </article>
        {/*======================== END OF WEB DEVELOPMENT ========================*/}
        <article className='courses'>
          <div className="courses__head">
            <h3>Database</h3>
          </div>
        {image.map((item) => (
          <ul className='courses__list'  key={item.id}>
            <li>
              <BiCheck className='courses__list-icon'/>
              <p onClick={() => handleImageClick(item)}>{item.imageName}</p>          
            </li>
            </ul>
          ))}
           {selectedImage && <img src={selectedImage.img}  alt={selectedImage.imageName} />}
            
         
        </article>
        {/*======================== END OF CONTENT CREATION ========================*/}
      
      </div>
    </section>
  )
}

export default Courses