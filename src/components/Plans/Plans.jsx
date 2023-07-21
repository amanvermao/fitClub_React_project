import React from 'react'
import './Plans.css'
import { plansData } from '../plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className="plans-contaner" id='plans'>
        <div className="blur plan-blur-1"> </div>
        <div className="blur plan-blur-2"></div>
            <div className="programe-header" style={{ gap: "2rem" }}>
                <span className='strock-text'>Ready to Start</span>
                <span>Your Journey</span>
                <span className='strock-text'>now withus</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span className='price'>$ {plan.price} </span>
                        <div className="features" key={i}>
                            {plan.features.map((feature, i) =>
                            (
                                <div className="feature" key={i}>
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature} </span>
                                </div>
                            ))}
                        </div>
                        <div>
                        <span> see more benifits -></span>
                       
                        </div>
                        <button className="btn">join now </button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Plans
