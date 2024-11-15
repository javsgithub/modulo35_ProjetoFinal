import { Description, DishContainer, Title } from './styles'
import Button from '../Button'

export type Props = {
  dish: Item
  onClick?: () => void
  handleModal: () => void
  selectProduct: (item: Item) => void
}

export type Item = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

const Dish = ({ dish, handleModal, selectProduct }: Props) => {
  return (
    <DishContainer>
      <img src={dish.foto} alt={dish.nome} />
      <Title>{dish.nome}</Title>
      <Description>{dish.descricao}</Description>
      <Button
        type="button"
        title="Clique para saber mais sobre este prato"
        size="big"
        width="304px"
        onClick={() => {
          handleModal()
          selectProduct(dish)
        }}
      >
        Adicionar ao carrinho
      </Button>
    </DishContainer>
  )
}

export default Dish
