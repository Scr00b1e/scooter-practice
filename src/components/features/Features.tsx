import React from 'react'
import './features.scss'

const Features: React.FC = () => {
  return (
    <div className="features">
        <div className="features__image">
            <img src="./img/features-img.png" alt="" className='features__img'/>
            <div className="features__gradient"></div>
        </div>
        <div className="container">
            <p className='features__text'>IMPRESSIVE FEATURES</p>
            <div className="features__inner">
                <div className="features__item">
                    <img src="./img/features/1.png" alt="" />
                    <h1 className='features__title'>10”</h1>
                    <p className='features__subtitle'>Pneumatic Tires</p>
                </div>
                <div className="features__item">
                    <img src="./img/features/2.png" alt="" />
                    <h1 className='features__title'>LED</h1>
                    <p className='features__subtitle'>Front LED Lights</p>
                </div>
                <div className="features__item">
                    <img src="./img/features/3.png" alt="" />
                    <h1 className='features__title'>18.6 mph</h1>
                    <p className='features__subtitle'>Max Speed</p>
                </div>
                <div className="features__item">
                    <img src="./img/features/4.png" alt="" />
                    <h1 className='features__title'>40.4 Miles</h1>
                    <p className='features__subtitle'>Max Range</p>
                </div>
                <div className="features__item">
                    <img src="./img/features/5.png" alt="" />
                    <h1 className='features__title'>20%</h1>
                    <p className='features__subtitle'>Hill Grade</p>
                </div>
                <div className="features__item">
                    <img src="./img/features/6.png" alt="" />
                    <h1 className='features__title'>IPX5</h1>
                    <p className='features__subtitle'>Water-Resistant</p>
                </div>
                <div className="features__item">
                    <img src="./img/features/7.png" alt="" />
                    <h1 className='features__title'>6H%</h1>
                    <p className='features__subtitle'>Fast Charging</p>
                </div>
                <div className="features__item">
                    <img src="./img/features/8.png" alt="" />
                    <h1 className='features__title'>551Wh%</h1>
                    <p className='features__subtitle'>Battery</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Features