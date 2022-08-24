import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../my__UI/button/Button'
import Card from '../../components/card/Card'
import Sceleton from '../../components/card/Sceleton'
import './accesories.scss'

type ItemsMap = {
    id: number
    title: string
    subtitle: string
    price: number
    image: string
  }

const Accesories: React.FC = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const skeletons = [...new Array(9)].map((_, id) => <Sceleton key={id}/>)

    const things = items.map((obj: ItemsMap) => (
        <Card count={0} {...obj} key={obj.id}/>
    ))

    React.useEffect(() => {
        setIsLoading(true)
        axios.get('https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/accesories')
        .then((res) => {
          setItems(res.data)
          setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='container'>
      <h1 className='accesories__title'>Accesories</h1>
        <div className="accesories">
            {
                isLoading ? skeletons : things
            }
            <Link to={'/'}>
              <Button text={'Back'} btnClass={'btn'}/>
            </Link>
        </div>
    </div>
  )
}

export default Accesories