import { Container } from '../../styles'

import DishList from '../../components/DishList'
import Header from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Place } from '../Home'

const FifthRestaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Place>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner restaurant={restaurant} />
      <Container>
        <DishList dishes={restaurant.cardapio} />
      </Container>
      <Footer />
    </>
  )
}

export default FifthRestaurant
