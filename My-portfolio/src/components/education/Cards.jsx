import React from 'react';
import './education.css';
import { HiOutlineAcademicCap } from "react-icons/hi";
const Cards = (props) => {
    const { title, content } = props;
        return (
              <div className="about__cards">
                <article className='about__card'>
                  <HiOutlineAcademicCap className='about__icon' />
                  <h3>{title}</h3>
                  <p>{content}</p>
                </article>
              </div>
           
    );
};

export default Cards;
