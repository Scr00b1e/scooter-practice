import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'
import './menu.scss'

const Menu: React.FC = () => {
    const items = useSelector((state: RootState) => state.cartSlice.subjects)
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)
  return (
    <div className='menu'>
        <div className="container">
            <div className="menu__inner">
                <ul className='menu__list'>
                    <li className='menu__list-item'>REVIEWS</li>
                    <li className='menu__list-item'>SHIPPING AND PAYMENT</li>
                    <li className='menu__list-item'>WHOLESALE</li>
                    <li className='menu__list-item'>BLOG</li>
                    <li className='menu__list-item'>CONTACTS</li>
                </ul>
                <div className="menu__contacts">
                    <Link to={'/cart'} className="cart">
                        <img src="./img/cart.png" alt="Cart" />
                        {totalCount > 0 && <span className='cart__count'>{totalCount}</span>}
                    </Link>
                    <a href="#">
                        <img src="./img/instagram.png" alt="" />
                    </a>
                    <p className='menu__number'>
                        +1 (888) 888-88-88
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu