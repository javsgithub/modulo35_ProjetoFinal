import { Description, DishContainer, Title } from './styles'
import Button from '../Button'
import { Item } from '../../pages/FirstRestaurant'

type Props = {
  foto: string
  nome: string
  descricao: string
  preco?: number
  item: Item
  handleModal: () => void
  selectDish: (item: Item) => void
}

const Dish = ({
  foto,
  nome,
  descricao,
  item,
  handleModal,
  selectDish
}: Props) => {
  const textLimit = () =>
    descricao.length > 145 ? `${descricao.slice(0, 145) + '...'}` : descricao

  const handleDish = () => {
    selectDish(item)
    handleModal()
  }

  return (
    <DishContainer>
      <img src={foto} alt={nome} />
      <Title>{nome}</Title>
      <Description>{textLimit()}</Description>
      <Button
        type="button"
        title="Clique para saber mais sobre este prato"
        size="big"
        width="304px"
        onClick={handleDish}
      >
        <>Adicionar ao carrinho</>
      </Button>
    </DishContainer>
  )
}

export default Dish
