import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';


const Join = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8qyyuma', 'template_hc5wbtl', form.current, 'jhjRxZyVEk_ThN_6y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

    <div className="Join">
  
        <div className="j-left">
        <hr/>
        <div>
        <span className='strock-text'> Ready to</span>
        <span> Level up</span>
        </div>
        <div>
        <span> your body</span>
        <span className='strock-text'> with us?</span>
        </div>

        </div>

        <div className="j-left">
        <form  ref={form}  action="" className="email-contaner" onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter Your Email' />
          <button className='btn btn-j'>Join Now</button>
        </form>

        </div>
    </div>
  )
}

export default Join
