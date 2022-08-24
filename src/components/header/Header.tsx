import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header: React.FC = () => {
  return (
    <div className="container">
        <div className='header'>
            <Link to={'/'}>
                <img src="./img/segway.png" alt="segway" className='header__img'/>
            </Link>
            <div className="header__info">
                <img src="./img/owner-photo.png" alt="" className="header__info-img" />
                <div className="header__words">
                    <h1>JOHN SMITH</h1>
                    <a href="#"><span>Ask a question </span>
                    <span>to the director</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header