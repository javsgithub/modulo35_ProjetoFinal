import { Description, DishContainer, Title } from './styles'
import Button from '../Button'
import { Item } from '../../pages/FirstRestaurant'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const Dish = ({ foto, nome, descricao }: Props) => {
  // const handleProduct = (item: Item) => {
  //   if (selectProduct) {
  //     selectProduct(item)
  //   }
  // }
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
        // onClick={() => {
        //   if (handleModal) {
        //     handleModal()
        //   }
        //   handleProduct
        // }}
      >
        Adicionar ao carrinho
      </Button>
    </DishContainer>
  )
}

export default Dish
