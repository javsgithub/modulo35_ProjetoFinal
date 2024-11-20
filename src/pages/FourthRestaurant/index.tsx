import { Container } from '../../styles'
import { Item } from '../FirstRestaurant'

import DishList from '../../components/DishList'
import Header from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Place } from '../Home'

const FourthRestaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Place>({
    id: 0,
    titulo: '',
    destacado: false,
    tipo: '',
    avaliacao: 0,
    descricao: '',
    capa: '',
    cardapio: []
  })

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <DishList dishes={restaurant.cardapio} />
      </Container>
      <Footer />
    </>
  )
}

export default FourthRestaurant
