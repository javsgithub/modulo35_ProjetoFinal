import { Dishes, Modal } from './styles'
import Dish, { Item } from '../Dish'

import { Container } from '../../styles'

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
            id={dish.id}
            foto={dish.foto}
            nome={dish.nome}
            descricao={dish.descricao}
            handleModal={handleModal}
            selectProduct={selectProduct}
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
