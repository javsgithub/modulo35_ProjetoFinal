import { Description, DishContainer, Title } from './styles'
import Button from '../Button'

import closeButton from '../../assets/images/close 1.png'

type Props = {
  image: string
  title: string
  description: string
  handleModal: () => void
}

const Product = ({ image, title, description, handleModal }: Props) => {
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
        <Description>{description}</Description>
        <Button
          type="link"
          to="/first-restaurant"
          title="Clique para ver as opções deste restaurante"
          size="big"
          width="218px"
        >
          Adicionar ao carrinho - R$ 60,00
        </Button>
      </div>
    </DishContainer>
  )
}

export default Product
