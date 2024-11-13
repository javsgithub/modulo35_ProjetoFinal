import { Dishes, Modal } from './styles'
import Dish from '../Dish'

import { Container } from '../../styles'

import Item from '../../models/Item'
import Product from '../Product'

import { useState } from 'react'

type Props = {
  dishes: Item[]
}

const DishList = ({ dishes }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [product, setProduct] = useState<Item>({
    image: '',
    title: '',
    description: '',
    id: 0
  })

  const handleModal = () => {
    isVisible === false ? setIsVisible(true) : setIsVisible(false)
  }

  const selectProduct = (item: Item) =>
    setProduct({
      image: item.image,
      title: item.title,
      description: item.description,
      id: item.id
    })

  return (
    <>
      <Dishes>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            image={dish.image}
            title={dish.title}
            description={dish.description}
            handleModal={handleModal}
            selectProduct={selectProduct}
            dish={dish}
          />
        ))}
      </Dishes>
      <Modal
        className={isVisible ? 'visible' : ''}
        onClick={() => setIsVisible(false)}
      >
        <Container>
          <Product
            handleModal={handleModal}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        </Container>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default DishList
