import { Container } from '../../styles'
import { Item } from '../../components/Dish'

import DishList from '../../components/DishList'
import Header from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

const SixthRestaurant = () => {
  const [dishes, setDishes] = useState<Item[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/first-restaurant')
      .then((res) => res.json())
      .then((res) => setDishes(res))
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <DishList dishes={dishes} />
      </Container>
      <Footer />
    </>
  )
}

export default SixthRestaurant
