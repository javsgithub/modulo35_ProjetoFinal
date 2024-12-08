import { Description, DishContainer, Title } from './styles'
import Button from '../Button'

import closeButton from '../../assets/images/close 1.png'
import { Item } from '../../pages/FirstRestaurant'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  item: Item
  image: string
  title: string
  description: string
  porcao: string
  preco: number
  handleModal: () => void
}

export const formataNumero = (item: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(item)
}

const Product = ({
  item,
  image,
  title,
  description,
  porcao,
  preco,
  handleModal
}: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <DishContainer>
      <img src={image} alt={title} />
      <img
        className="closingImage"
        src={closeButton}
        onClick={handleModal}
        alt=""
      />
      <div className="content">
        <Title>{title}</Title>
        <Description>
          {description}
          <br />
          <br />
          Serve: de {porcao}
        </Description>
        <Button
          type="button"
          title="Clique para adicionar este item ao carrinho"
          size="big"
          width="218px"
          onClick={addToCart}
        >
          <>Adicionar ao carrinho - {formataNumero(preco)}</>
        </Button>
      </div>
    </DishContainer>
  )
}

export default Product
