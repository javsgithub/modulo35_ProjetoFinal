import { Container } from '../../styles'

import DishList from '../../components/DishList'
import Header from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { Item } from '../../components/Dish'

const FirstRestaurant = () => {
  const [cardapio, setCardapio] = useState<Item[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <DishList dishes={cardapio} />
      </Container>
      <Footer />
    </>
  )
}

export default FirstRestaurant
