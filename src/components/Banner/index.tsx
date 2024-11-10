import bannerImg from '../../assets/images/banner_ItalianFood.png'
import { Container } from '../../styles'
import { Category, Image, RestaurantName } from './styles'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <Category>Italiana</Category>
      <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
    </Container>
  </Image>
)

export default Banner
