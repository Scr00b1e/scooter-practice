import React from 'react'
import './notFound.scss'
import { Link } from 'react-router-dom'
import Button from '../../my__UI/button/Button'

const NotFound: React.FC = () => {
  return (
    <div className='container'>
        <div className="notFound">
            <div className="notFound__words">
              <h1>Cart is Empty</h1>
              <p>U just probably dont ordered anything yet</p>
            </div>
            <Link to={'/'}>
              <Button text={'Back'} btnClass={'btn btn-back'}/>
            </Link>
        </div>
    </div>
  )
}

export default NotFound