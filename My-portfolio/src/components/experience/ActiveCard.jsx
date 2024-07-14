import React from 'react';
import './experience.css';
import { HiOutlineBriefcase } from "react-icons/hi";
const ActiveCard = (props) => {
    const { title, content } = props;
        return (
            
            
              <div className="about__cards">
                <article className='about__card'>
                  <HiOutlineBriefcase className='about__icon' />
                  <h3>{title}</h3>
                  <p>{content}</p>
                </article>
    
                
              </div>
           
    );
};

export default ActiveCard;
