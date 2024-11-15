import { Dishes, Modal } from './styles'
import Dish from '../Dish'

import { Container } from '../../styles'

import { Item } from '../Dish'
import Product from '../Product'

import { useState } from 'react'

type Props = {
  dishes: Item[]
}

const DishList = ({ dishes }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [product, setProduct] = useState<Item>({
    foto: '',
    nome: '',
    descricao: '',
    id: 0
  })

  const handleModal = () => {
    isVisible === false ? setIsVisible(true) : setIsVisible(false)
  }

  const selectProduct = (item: Item) =>
    setProduct({
      foto: item.foto,
      nome: item.nome,
      descricao: item.descricao,
      id: item.id
    })

  return (
    <>
      <Dishes>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
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
            image={product.foto}
            title={product.nome}
            description={product.descricao}
          />
        </Container>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default DishList
