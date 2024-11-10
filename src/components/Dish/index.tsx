import { Description, DishContainer, Title } from './styles'
import Button from '../Button'

export type Props = {
  image: string
  title: string
  description: string
  onClick?: () => void
}

const Dish = ({ image, title, description }: Props) => {
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
      >
        Adicionar ao carrinho
      </Button>
    </DishContainer>
  )
}

export default Dish
