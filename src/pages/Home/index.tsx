import Hero from '../../components/Hero'
import { Container } from '../../styles'
import RestaurantList from '../../components/RestaurantList'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { Item } from '../FirstRestaurant'

export type Place = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Item[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Place[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <Container>
        <RestaurantList restaurants={restaurants} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
