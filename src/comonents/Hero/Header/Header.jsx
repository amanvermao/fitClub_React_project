import React, { useState } from 'react'
import './Header.css'
import Logo from '../../../assets/logo.png'
import Bars from '../../../assets/bars.png'
import { Link } from 'react-scroll';



const Header = () => {
  const mobile =window.innerWidth<=768? true:false;
  const [menuOpend,setMenuOpend] = useState(false)
  return (
    <div className='header'>
    <img src={Logo} alt="" className='logo' />
      {menuOpend === false && mobile===true?(
       <div  onClick={()=>setMenuOpend(true)}>
       <img src={Bars} alt=""style={{width:"1.5rem" ,height:"1.5rem"}} />
       </div>) : (<ul className='header-menu'>
        <li>
        <Link onClick={()=>setMenuOpend(false)}
        to={'home'}
        span={true}
        smooth={true}>
        Home </Link>
        </li>
        <li>
        <Link
        onClick={()=>setMenuOpend(false)}
        to={'programes'}
        span={true}
        smooth={true}> Programs</Link>
       </li>
        <li>
        <Link
        onClick={()=>setMenuOpend(false)}
        to={'reasons'}
        span={true}
        smooth={true}>Why Us</Link>
        </li>
        <li>
        <Link
        onClick={()=>setMenuOpend(false)}
        to={'plans'}
        span={true}
        smooth={true}
        > Plans</Link>
      </li>
        <li>
        <Link
        onClick={()=>setMenuOpend(false)}
        to={'Testimonials'}
        span={true}
        smooth={true}>
        Testimonals </Link></li>
    </ul>) 
      }
    
    
    </div>
  )
}

export default Header
