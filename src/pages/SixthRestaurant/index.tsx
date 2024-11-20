import { Container } from '../../styles'

import DishList from '../../components/DishList'
import Header from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Place } from '../Home'

export type Item = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

const SixthRestaurant = () => {
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
      <Banner restaurant={restaurant} />
      <Container>
        <DishList dishes={restaurant.cardapio} />
      </Container>
      <Footer />
    </>
  )
}

export default SixthRestaurant
