import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import addidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'


const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="r-left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="r-right">
        <span>some resons</span>
        <div>
          <span className='strock-text'>why</span>
          <span>  choose us?</span>
        </div>
        <div className='details-r'>
          <div><img src={tick} alt="" /> <span>over 140+ expert coachs</span></div>
          <div><img src={tick} alt="" /> <span>train smarter and faster than before</span></div>
          <div><img src={tick} alt="" /> <span>1 free program for new member</span></div>
          <div><img src={tick} alt="" /> <span>reliable partners</span></div>
        </div>

        <span style={{
          color:"gray",
          fontWeight:"normal"
        }}>OUR PARTNERS</span>
        <div className="partners">
        <img src={nb} alt="" />
        <img src={addidas} alt="" />
        <img src={nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
