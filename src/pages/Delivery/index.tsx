import Button from '../../components/Button'
import { DeliveryContainer, Overlay, SideBar } from './styles'

const Delivery = () => (
  <DeliveryContainer>
    <Overlay />
    <SideBar>
      <Button
        type="button"
        title="Clique para preencher os dados da entrega"
        size="big"
        width="344px"
      >
        <>Continuar com o pagamento</>
      </Button>
      <Button
        type="link"
        to=""
        title="Clique para retornar ao carrinho"
        size="big"
        width="344px"
      >
        <>Voltar para o carrinho</>
      </Button>
    </SideBar>
  </DeliveryContainer>
)

export default Delivery
