import React from 'react'
import './footer.scss'

const Footer: React.FC = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__inner">
                <img src="./img/segway-dark.png" alt="" />
                <ul className="footer__words">
                    <li className='footer__text'>
                    +1 (888) 777-77-77
                    </li>
                    <li className='footer__text'>
                    2637 Fairfax Ave
                    Culver City, CA 90232
                    </li>
                    <li className='footer__text'>
                    Segway  California © 2017
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer