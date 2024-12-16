import Button from '../Button'
import Sidebar from '../Sidebar'
import { ConfirmationMessage } from './styles'
import { useDispatch } from 'react-redux'
import { clearState, handleConfirmation } from '../../store/reducers/cart'

const Confirmation = () => {
  const dispatch = useDispatch()

  const hideConfirmationComponent = () => {
    dispatch(handleConfirmation())
  }

  const clearCart = () => {
    dispatch(clearState())
  }

  return (
    <Sidebar tittle="Pedido realizado - {ORDER_ID}">
      <div>
        <ConfirmationMessage>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </ConfirmationMessage>
        <Button
          type="button"
          title="Clique para adicionar este item ao carrinho"
          size="big"
          width="344px"
          onClick={() => {
            hideConfirmationComponent()
            clearCart()
          }}
        >
          <>Concluir</>
        </Button>
      </div>
    </Sidebar>
  )
}

export default Confirmation
