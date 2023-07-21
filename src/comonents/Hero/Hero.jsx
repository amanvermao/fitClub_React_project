import React from 'react'
import './Hero.css'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import Header from './Header/Header'




const Hero = () => {
  const transition={type:'tween', duration:3}
  const mobile =window.innerWidth<=768? true:false;
  return (
    <div className='Hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
      <Header/>
        {/* the best add */}
        <div className="the-best-ad">
        <motion.div 
        initial={{left: mobile?"165px":'283px ' }}
        whileInView={{left:'8px'}}
        transition={transition}>  
        </motion.div>
          <span>The Bast Fittness Club In The Town</span>
        </div>
        {/* the hero headding */}
        <div className="hero-text">
          <div>
            <span className='strock-text'> Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Idial Body</span>
          </div>
          <div>
            <span>
            lorem have just psum dolor sit amet consectetur adipisicing elit. Quae dolorem nemo voluptatem dolorum quis recusandae est!
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>+178</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness prograams</span>
          </div>
        </div>
        {/* hero-bittons */}
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>


      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
         className="heart_rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero image */}
        <img src={hero_image} className='hero_image' alt="" />
        <img src={hero_image_back} className='hero_image_back' alt="" />
        {/* calories */}
        <motion.div 
        initial={{right:'5rem'}}
        whileInView={{right:'40rem'}}
        transition={transition}
        className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Caloriesa Burn</span>
            <span> 150 cal</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
