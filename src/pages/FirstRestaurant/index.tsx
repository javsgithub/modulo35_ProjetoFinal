import { Container } from '../../styles'
import Item from '../../models/Item'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import DishList from '../../components/DishList'
import Header from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

const dishes: Item[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida!',
    infoTags: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 2,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 3,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 4,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 5,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 6,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  }
]

const FirstRestaurant = () => (
  <>
    <Header />
    <Banner />
    <Container>
      <DishList dishes={dishes} />
    </Container>
    <Footer />
  </>
)

export default FirstRestaurant
