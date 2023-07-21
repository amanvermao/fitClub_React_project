import React from 'react'
import './Programes.css'
import {programsData} from './programsData'
import RightArrow from '../assets/rightArrow.png'

const Programes = () => {
  return (
    <div className="Programes" id='programes'>
    <div className="programe-header">
      <span className='strock-text'>Explore our</span>
      <span>Programes</span>
      <span className='strock-text'>To Shape You</span>
    </div>
    <div className="program-catogry">
      {programsData.map((program ,i) =>(
        <div className="catogary" key={i}>
          {program.image}
          <span> {program.heading}</span>
          <span> {program.details}</span>
          <div className="join-now" key={i}>
            Join Now 
            <img src={RightArrow} alt=""/>
          </div>
        </div>
      ))}
    </div>
      
    </div>
  )
}

export default Programes
