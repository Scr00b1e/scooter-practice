import React from 'react'
import './review.scss'

const Review: React.FC = () => {
  return (
    <div className='review'>
            <div className="review__item blue">
                <div className="review__left">
                    <div className="review__words">
                        <h1 className="review__title">
                        Smart battery
                        Management system
                        (Smart-BMS)
                        </h1>
                        <p className='review__text'>
                        The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability
                        </p>
                    </div>
                </div>
                <div className="review__right">
                    <img src="./img/review/1.png" alt="" />
                </div>
            </div>
            <div className="review__item">
                <div className="review__left">
                    <img src="./img/review/2.png" alt="" />
                </div>
                <div className="review__right">
                    <div className="review__words">
                        <h1 className="review__title">
                        Dual Braking 
                        System
                        </h1>
                        <p className='review__text'>
                        Simultaneous mechanical front drum brake and regenerative electric back brake provide both stability and steerability.
                        </p>
                        <p>*IPX5 water resistance</p>
                    </div>
                </div>
            </div>
            <div className="review__item blue close">
            <div className="review__left">
                    <div className="review__words">
                        <h1 className="review__title">
                        Smart battery
                        Management system
                        (Smart-BMS)
                        </h1>
                        <p className='review__text'>
                        The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability
                        </p>
                    </div>
                </div>
                <div className="review__right">
                    <img src="./img/review/3.png" alt="" />
                </div>
            </div>
            <div className="review__item center">
                <div className="review__words">
                    <h1 className="review__title">
                    One-step Folding Mechanism
                    </h1>
                    <p className='review__text'>
                        Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds.
                    </p>
                </div>
                <img src="./img/review/4.png" alt="" />
            </div>
            <div className="review__item blue far">
            <div className="review__left">
                    <div className="review__words">
                        <h1 className="review__title">
                        Smart battery
                        Management system
                        (Smart-BMS)
                        </h1>
                        <p className='review__text'>
                        The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability
                        </p>
                    </div>
                </div>
                <div className="review__right">
                    <img src="./img/review/5.png" alt="" />
                </div>
            </div>
            <div className="review__item">
                <div className="review__left">
                    <img src="./img/review/6.png" alt="" />
                </div>
                <div className="review__right">
                    <div className="review__words">
                        <h1 className="review__title">
                        Dual Braking 
                        System
                        </h1>
                        <p className='review__text'>
                        Simultaneous mechanical front drum brake and regenerative electric back brake provide both stability and steerability.
                        </p>
                        <p>*IPX5 water resistance</p>
                    </div>
                </div>
            </div>
            <div className="review__item blue">
            <div className="review__left">
                    <div className="review__words">
                        <h1 className="review__title">
                        Smart battery
                        Management system
                        (Smart-BMS)
                        </h1>
                        <p className='review__text'>
                        The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability
                        </p>
                        <span>*Disclaimer for your safety, please dont to ride at night</span>
                    </div>
                </div>
                <div className="review__right">
                    <img src="./img/review/7.png" alt="" />
                </div>
            </div>
    </div>
  )
}

export default Review