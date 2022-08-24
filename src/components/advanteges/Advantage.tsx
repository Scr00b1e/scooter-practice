import React from 'react'
import './advantage.scss'

const Advantage: React.FC = () => {
    const [active, setActive] = React.useState(1)

    const onActive = (index: number) => {
        setActive(index)
    }

  return (
    <div className='container'>
        <div className="advantage">
            <div className="advantage__tabs">
                <div onClick={() => onActive(1)} 
                className={active === 1 ? 'advantage__tabs-item active' : 'advantage__tabs-item'}>
                    <img 
                    src={active === 1 ? './img/tabs/box-active.png' : './img/tabs/box.png'} alt="" />
                    <div>
                        <p>Delivery within</p>
                        <p>1 business day</p>
                    </div>
                </div>
                <div onClick={() => onActive(2)} 
                className={active === 2 ? 'advantage__tabs-item active' : 'advantage__tabs-item'}>
                    <img 
                    src={active === 2 ? './img/tabs/2-active.png' : './img/tabs/2.png'} alt="" />
                    <div>
                        <p>Basic 1 year</p>
                        <p>warranty</p>
                    </div>
                </div>
                <div onClick={() => onActive(3)} 
                className={active === 3 ? 'advantage__tabs-item active' : 'advantage__tabs-item'}>
                    <img 
                    src={active === 3 ? './img/tabs/3-active.png' : './img/tabs/3.png'} alt="" />
                    <div>
                        <p>After Sales</p>
                        <p>Support</p>
                    </div>
                </div>
                <div onClick={() => onActive(4)} 
                className={active === 4 ? 'advantage__tabs-item active' : 'advantage__tabs-item'}>
                    <img 
                    src={active === 4 ? './img/tabs/4-active.png' : './img/tabs/4.png'} alt="" />
                    <div>
                        <p>Delivery within</p>
                        <p>1 business day</p>
                    </div>
                </div>
            </div>
            <div className={active === 1 ? 'advantage__content active' : 'advantage__content'}>
                <div className="advantage__words">
                    <div>
                        <h1>Up to 40 miles</h1>
                        <h1>per charge</h1>
                    </div>
                    <p>Free California 1 day shipping.
                        US Free shipping 3-5 Days
                    </p>
                </div>
                <div className="advantage__img">
                    <img src="./img/tabs/1-icon.png" alt="" />
                </div>
            </div>

            <div className={active === 2 ? 'advantage__content active' : 'advantage__content'}>
                <div className="advantage__words">
                    <div>
                        <h1>one year</h1>
                        <h1>manufactirer's warranty</h1>
                    </div>
                    <p>The basic warranty is 1 year
                    You can also extend the warranty up to 4 years      
                    </p>
                </div>
                <div className="advantage__img">
                    <img src="./img/tabs/2-icon.png" alt="" />
                </div>
            </div>

            <div className={active === 3 ? 'advantage__content active' : 'advantage__content'}>
                <div className="advantage__words">
                    <div>
                        <h1>after sales</h1>
                        <h1>Support</h1>
                    </div>
                    <p>If you have any difficultes with your kickscooter, our speacialists will contact you within 15 minutes      
                    </p>
                </div>
                <div className="advantage__img">
                    <img src="./img/tabs/3-icon.png" alt="" />
                </div>
            </div>
            
            <div className={active === 4 ? 'advantage__content active' : 'advantage__content'}>
                <div className="advantage__words">
                    <div>
                        <h1>Up to 40 miles of range </h1>
                        <h1>on a single charge</h1>
                    </div>
                    <p>With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.</p>
                </div>
                <div className="advantage__img">
                    <img src="./img/tabs/4-icon.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantage