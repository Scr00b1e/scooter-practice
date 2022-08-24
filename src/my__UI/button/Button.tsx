import React from 'react'
import './button.scss'

type BtnProps = {
  text: string
  btnClass: string
}

const Button: React.FC<BtnProps> = ({text, btnClass}) => {
  return (
    <button className={btnClass}>
      {text}
    </button>
  )
}

export default Button