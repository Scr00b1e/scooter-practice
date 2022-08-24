import React from 'react'
import './Comments.scss'
import Slider from './slider/Slider'

const Comments: React.FC = () => {
  return (
    <div className='comments'>
        <div className="container">
            Reviews
            <div className="comments__inner">
                <Slider/>
            </div>
        </div>
    </div>
  )
}

export default Comments