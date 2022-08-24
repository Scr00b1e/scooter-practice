import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, CartType, minusItem, removeItem } from '../../redux/cartSlice/CartSlice'
import './cartItem.scss'

type CartItemType = {
  id: number
  title: string
  price: number
  image: string
  count: number
}

const CartItem: React.FC<CartItemType> = ({ id, title, price, image, count }) => {
  const dispatch = useDispatch()

  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  const onClickMinus = () => {
    dispatch(minusItem({id} as CartType))
  }

  const onClickPlus = () => {
    dispatch(addItem({id} as CartType))
  }

  if(count === 0) {
    dispatch(removeItem(id))
  }

  return (
    <div className='cartItem'>
        <div className="cartItem__info">
            <img src={image} alt="" />
            <h1 className="cartItem__title">
                {title}
            </h1>
        </div>
        <div className="cartItem__count">
          <button className='btn count' onClick={onClickMinus}>
            <img src="./img/remove.svg" alt="" />
          </button>
          <span className='cartItem__span'>{count}</span>
          <button className='btn count' onClick={onClickPlus}>
            <img src="./img/add.svg" alt="" />
          </button>
        </div>
        <div className="cartItem__right">
            <p className='cartItem__price'>{price} $</p>
            <img src="./img/close.png" alt="" onClick={onClickRemove}/>
        </div>
    </div>
  )
}

export default CartItem