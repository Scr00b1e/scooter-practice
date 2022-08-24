import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../../components/cartItem/CartItem'
import Button from '../../my__UI/button/Button'
import { clearItems } from '../../redux/cartSlice/CartSlice'
import { RootState } from '../../redux/store'
import NotFound from '../notFound/NotFound'
import './cart.scss'

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const item = useSelector((state: RootState) => state.cartSlice.subjects)
    const { totalPrice } = useSelector((state: RootState) => state.cartSlice)
    const totalCount = item.reduce((sum: number, item: any) => sum + item.count, 0)

    const onClickDelete = () => {
        dispatch(clearItems())
    }

    if(totalCount === 0) 
    return (
        <NotFound/>
    )

  return (
    <div className='container'>
        <div className="cart__top">
            <h1 className="cart__title">
                Cart
            </h1>
            <div className="cart__delete" onClick={onClickDelete}>
                <img src="./img/trash.png" alt="" />
                Remove All
            </div>
        </div>
        <div className="cart">
            {
                item.map((obj) => (
                    <CartItem {...obj} key={obj.id}/>
                ))
            }
        </div>
        <div className="cart__info">
            <p>Count: {totalCount}</p>
            <p>Totally: {totalPrice}</p>
        </div>
        <div className="cart__footer">
            <Link to={'/'}>
                <Button text={'Back'} btnClass={'btn btn-back'}/>
            </Link>
            <Button text={'Pay'} btnClass={'btn btn-back'}/>
        </div>
    </div>
  )
}

export default Cart