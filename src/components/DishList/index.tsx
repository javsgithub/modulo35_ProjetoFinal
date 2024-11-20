import { Dishes, Modal } from './styles'

import { Container } from '../../styles'

import Product from '../Product'

import { useState } from 'react'
import { Item } from '../../pages/FirstRestaurant'
import Dish from '../Dish'

type Props = {
  dishes: Item[]
}

const DishList = ({ dishes }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [dish, setDish] = useState<Item>({
    id: 0,
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0
  })

  const handleModal = () => {
    isVisible === false ? setIsVisible(true) : setIsVisible(false)
  }

  const selectDish = (item: Item) =>
    setDish({
      id: item.id,
      foto: item.foto,
      nome: item.nome,
      descricao: item.descricao,
      porcao: item.porcao,
      preco: item.preco
    })

  return (
    <>
      <Dishes>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            foto={dish.foto}
            nome={dish.nome}
            descricao={dish.descricao}
            preco={dish.preco as number}
            item={dish}
            handleModal={handleModal}
            selectDish={selectDish}
          />
        ))}
      </Dishes>
      <Modal
        className={isVisible ? 'visible' : ''}
        onClick={() => setIsVisible(false)}
      >
        <Container>
          <Product
            image={dish.foto}
            title={dish.nome}
            description={dish.descricao}
            porcao={dish.porcao as string}
            preco={dish.preco as number}
            handleModal={handleModal}
          />
        </Container>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default DishList
