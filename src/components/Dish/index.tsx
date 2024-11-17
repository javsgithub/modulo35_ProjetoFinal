import { Description, DishContainer, Title } from './styles'
import Button from '../Button'

export type Item = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
  onClick?: () => void
  handleModal?: () => void
  selectProduct?: (item: Item) => void
}

const Dish = ({ foto, nome, descricao, handleModal, selectProduct }: Item) => {
  const handleProduct = (item: Item) => {
    if (selectProduct) {
      selectProduct(item)
    }
  }
  return (
    <DishContainer>
      <img src={foto} alt={nome} />
      <Title>{nome}</Title>
      <Description>{descricao}</Description>
      <Button
        type="button"
        title="Clique para saber mais sobre este prato"
        size="big"
        width="304px"
        onClick={() => {
          if (handleModal) {
            handleModal()
          }
          handleProduct
        }}
      >
        Adicionar ao carrinho
      </Button>
    </DishContainer>
  )
}

export default Dish
