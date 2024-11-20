import { Description, DishContainer, Title } from './styles'
import Button from '../Button'

import closeButton from '../../assets/images/close 1.png'

type Props = {
  image: string
  title: string
  description: string
  porcao: string
  preco: number
  handleModal: () => void
}

const Product = ({
  image,
  title,
  description,
  porcao,
  preco,
  handleModal
}: Props) => {
  const formataNumero = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
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
          type="link"
          to="/first-restaurant"
          title="Clique para ver as opções deste restaurante"
          size="big"
          width="218px"
        >
          <>Adicionar ao carrinho - {formataNumero()}</>
        </Button>
      </div>
    </DishContainer>
  )
}

export default Product
