import React from 'react'
import { Link } from 'react-router-dom'
import './catalog.scss'

const Catalog: React.FC = () => {
  return (
    <div className='catalog'>
        <div className="container">
            <div className="catalog__inner">

                <div className="catalog__top">
                  <div className="catalog__item">
                      <img src="./img/catalog/1.png" alt="" />
                      <h1 className='catalog__title'>KS E22</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/2.png" alt="" />
                      <h1 className='catalog__title'>KS ES1l</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/3.png" alt="" />
                      <h1 className='catalog__title'>KS Air t15</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/4.png" alt="" />
                      <h1 className='catalog__title'>KS F30</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/5.png" alt="" />
                      <h1 className='catalog__title'>KS E45</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/6.png" alt="" />
                      <h1 className='catalog__title'>KS MAX</h1>
                  </div>
                  <div className="catalog__item">
                    <img src="./img/catalog/7.png" alt="" />
                    <h1 className="catalog__title catalog__title--7">KS MAX</h1>
                  </div>
                </div>
        
                <div className="catalog__bottom">
                  <div className="catalog__item">
                      <img src="./img/catalog/8.png" alt="" />
                      <h1 className='catalog__title'>KS ES2</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/9.png" alt="" />
                      <h1 className='catalog__title'>KS ES 3</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/10.png" alt="" />
                      <h1 className='catalog__title catalog__title--10'>EKS ZING E8</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/11.png" alt="" />
                      <h1 className='catalog__title catalog__title--10'>KS ES 3</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/12.png" alt="" />
                      <h1 className='catalog__title catalog__title--11'>EKS ZING E10</h1>
                  </div>
                  <div className="catalog__item">
                      <img src="./img/catalog/13.png" alt="" />
                      <h1 className='catalog__title'>EKS ZING E12</h1>
                  </div>
                  <Link to={'/accesories'} className="catalog__item">
                      <img src="./img/catalog/14.png" alt="" className='catalog__img'/>
                      <h1 className='catalog__title  catalog__title--14'>Accessories</h1>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catalog