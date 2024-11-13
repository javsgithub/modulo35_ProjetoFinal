import { Description, DishContainer, Title } from './styles'
import Button from '../Button'
import Item from '../../models/Item'

export type Props = {
  image: string
  title: string
  description: string
  onClick?: () => void
  handleModal: () => void
  selectProduct: (item: Item) => void
  dish: Item
}

const Dish = ({
  image,
  title,
  description,
  dish,
  handleModal,
  selectProduct
}: Props) => {
  return (
    <DishContainer>
      <img src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
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
