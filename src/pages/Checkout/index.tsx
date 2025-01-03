import Hero from '../../components/Hero'
import { Container } from '../../styles'
import RestaurantList from '../../components/RestaurantList'
import Footer from '../../components/Footer'
import { Item } from '../FirstRestaurant'
import { useGetRestaurantListQuery } from '../../services/api'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Delivery from '../../components/Delivery'

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

const Checkout = () => {
  const { data: restaurants } = useGetRestaurantListQuery()
  const { items } = useSelector((state: RootReducer) => state.cart)

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Hero />
      <Container>
        <RestaurantList restaurants={restaurants} />
      </Container>
      <Footer />
      <Delivery />
    </>
  )
}

export default Checkout
