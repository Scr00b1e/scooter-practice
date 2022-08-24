import axios from 'axios'
import React from 'react'
import Advantage from '../components/advanteges/Advantage'
import Card from '../components/card/Card'
import Sceleton from '../components/card/Sceleton'
import Comments from '../components/comments/Comments'
import Complect from '../components/complect/Complect'
import Features from '../components/features/Features'
import Instruction from '../components/instruction/Instruction'
import Intro from '../components/intro/Intro'
import Review from '../components/review/Review'

type ItemsMap = {
  id: number
  title: string
  subtitle: string
  price: number
  image: string
}

const Home: React.FC = () => {
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
    <div className='home'>
        <Intro/>
        <Advantage/>
        <Complect/>
        <div className="container">
          <h1 className='home__title'>Accesories</h1>
          <div className="home__card">
            {
              isLoading ? skeletons : things
            }
          </div>
        </div>
        <Features/>
        <Review/>
        <Instruction/>
        <Comments/>
    </div>
  )
}

export default Home