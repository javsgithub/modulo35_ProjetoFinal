import Rest from '../Restaurant'
import { Restaurants } from './styles'

import { Place } from '../../pages/Home'

export type Props = {
  restaurants: Place[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Restaurants>
    {restaurants.map((restaurant) => (
      <Rest
        key={restaurant.id}
        capa={restaurant.capa}
        titulo={restaurant.titulo}
        avaliacao={restaurant.avaliacao as number}
        descricao={restaurant.descricao}
        id={restaurant.id}
        destacado={restaurant.destacado}
        tipo={restaurant.tipo}
        cardapio={restaurant.cardapio}
      />
    ))}
  </Restaurants>
)

export default RestaurantList
