import { Place } from '../../pages/Home'
import { Container } from '../../styles'
import { Category, Image, RestaurantName } from './styles'

type Props = {
  restaurant: Place
}

const Banner = ({ restaurant }: Props) => (
  <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <Container>
      <Category>{restaurant.tipo}</Category>
      <RestaurantName>{restaurant.titulo}</RestaurantName>
    </Container>
  </Image>
)

export default Banner
