import React from 'react'
import './Footer.css'
import GitHub from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const footer = () => {
  return (
    <div className="footer-contaner">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GitHub} alt="" />
          <img src={instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

    </div>
  )
}

export default footer
