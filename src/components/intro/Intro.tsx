import React from 'react'
import Button from '../../my__UI/button/Button'
import './intro.scss'
import IntroSlider from './slider/IntroSlider';

const Intro: React.FC = () => {
  return (
    <div className="container">
        <div className='intro'>
            <div className="intro__words">
                <span className='intro__span'>In stock</span>
                <div className="intro__titles">
                    <h1 className='intro__title'>segway</h1>
                    <h1 className='intro__title'>ninebot</h1>
                    <h1 className='intro__title'>kickscooter</h1>
                    <h1 className='intro__title'>max</h1>
                </div>
                <div className="intro__bundle">
                    <p className='intro__bundle-title'>Add an extended warranty from <span>Extend</span></p>
                    <div className="intro__bundle-buttons">
                        <Button text={'1 Year - $139'} btnClass={'btn btn--bundle'}/>
                        <Button text={'2 Year - $209'} btnClass={'btn btn--bundle'}/>
                        <Button text={'3 Year - $279'} btnClass={'btn btn--bundle'}/>
                    </div>
                    <div className="intro__bundle-info">
                        <div className="intro__bundle-prices">
                            <span>$1049.99</span>
                            <h3>$949.99</h3>
                        </div>
                        <div className="intro__bundle-text">
                            <p>Segway Protective</p>
                            <p>Gear Set as a gift</p>
                        </div>
                        <img src="./img/gift.png" alt="" />
                    </div>
                    <div className="intro__buy">
                    <Button text={'BUY IT NOW'} btnClass={'btn btn--blue'}/>
                    <Button text={'ADD TO CART'} btnClass={'btn btn--blue'}/>
                </div>
                </div>
                <div className="intro__methods">
                    <div className="intro__methods-text">
                        Payment Methods: <b>Starting at $55/mo with<img src='./img/payment-logo.png'/>.</b><span>Prequalify now</span>
                    </div>
                    <img src="./img/payment-methods.png" alt="" />
                </div>
            </div>
            <div className="intro__img">
                <IntroSlider/>
            </div>
        </div>
    </div>
  )
}

export default Intro