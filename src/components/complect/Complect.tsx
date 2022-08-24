import React from 'react'
import './complect.scss'

const Complect: React.FC = () => {
  return (
    <div className="complect__background">
        <div className='container'>
            <div className="complect">
                <div className="complect__video">
                    Packing List
                    <div className="complect__player">
                </div>
                </div>
                <div className="complect__img">
                    <img src="./img/elipse.png" alt="" className='complect__elipse'/>
                    <img src="./img/complect.png" alt="" className='complect__photo'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Complect