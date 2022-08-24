import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, CartType } from '../../redux/cartSlice/CartSlice'
import { RootState } from '../../redux/store'
import './card.scss'

type CardType = {
  image: string
  title: string
  subtitle: string
  price: number
  id: number
  count: number
}

const Card: React.FC<CardType> = ({image, title, subtitle, price, count, id}) => {
  const cartItem = useSelector((state: RootState) => state.cartSlice.subjects.find((obj) => obj.id === id))
  const addedCount = cartItem ? cartItem.count : 0
  const dispatch = useDispatch()

  const onClickAdd = () => {
    const item: CartType = {
      id,
      title,
      subtitle,
      price,
      count,
      image
    }
    dispatch(addItem(item))
  }

  return (
    <div className='card'>
        <div className="card__images">
            <img src="./img/accesories/elipse.png" alt="" />
            <img src={image} alt="" className='card__img'/>
        </div>
        <h1 className='card__title'>{title}
        </h1>
        <p className='card__subtitle'>{subtitle}</p>
        <span className='card__price'>${price}</span>
        <span onClick={onClickAdd}>
          <button className='btn btn--hover'>
            ADD TO CART { addedCount > 0 && <span>{addedCount}</span> }
          </button>
        </span>
    </div>
  )
}

export default Card