import React from 'react'
import Button from '../../my__UI/button/Button'
import './instruction.scss'

const Instruction: React.FC = () => {
  return (
    <div className="instruction">
        <div className='container'>
            <div className="instruction__block">
                <div className="instruction__inner">
                    <img src="./img/instruction.png" alt="" className='instruction__img'/>
                    <div className="instruction__content">
                        <h1 className="instruction__title">
                            DOWNLOAD 
                            manual
                        </h1>
                        <div className="instruction__words">
                            <div className="instruction__words-item">
                                <img src="./img/instruction-1.png" alt="" />
                                <p>Assembly and 
                                preparation for the trip</p>
                            </div>
                            <div className="instruction__words-item">
                                <img src="./img/instruction-2.png" alt="" />
                                <p>How to charge 
                                a scooter</p>
                            </div>
                            <div className="instruction__words-item">
                                <img src="./img/instruction-3.png" alt="" />
                                <p>How to ride 
                                properly</p>
                            </div>
                        </div>
                        <button className='btn btn--blue img'>
                            Download manual
                            <img src="./img/file.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instruction