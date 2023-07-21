import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../testimonialsData'
import leftArrows from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {
  const [selected , setSelected] =useState(0);
  const tlength =testimonialsData.length;
  return (
    <div className="Testimonials">
    <div className="t-left">
    <span>Testimonials</span>
        <span className='strock-text'>What they</span>
        <span>say about us</span>
        <span>{testimonialsData [selected].review} </span>
        <span>
        <span> {testimonialsData [selected].name} 
        </span> {" "}
           - {testimonialsData [selected].status}
        </span>

    </div>
      <div className="t-right">
      <div className='imgtborder'></div>
      <div className='imgbg'></div>
      <img src= {testimonialsData [selected].image} alt="" />
        <div className="arrows">

          <img
          onClick={()=>{
            selected === 0
            ? setSelected(tlength -1)
            : setSelected((prev)=> prev -1);
             } }
          
          
          src= {leftArrows} alt="" />
          <img
          onClick={()=>{
            selected===tlength -1 
            ? setSelected(0)
            :setSelected((prev)=> prev +1);
            }  }  
          
          
          src= {rightArrow} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Testimonials
