import { Dishes, Modal } from './styles'
import Dish from '../Dish'

// import Product from '../Product'
import { Container } from '../../styles'

// import pizza from '../../assets/images/pizza.png'
// import { title } from 'process'
import Item from '../../models/Item'

type Props = {
  dishes: Item[]
}

const DishList = ({ dishes }: Props) => {
  return (
    <>
      <Dishes>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            image={dish.image}
            title={dish.title}
            description={dish.description}
          />
        ))}
      </Dishes>
      <Modal>
        <Container>
          {/* <Product
            id={1}
            image={pizza}
            title={title}
            description={'Ainda testando funcionalidade'}
          /> */}
        </Container>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default DishList
