import Button from '../Button'
import Sidebar from '../Sidebar'

const Confirmation = () => (
  <Sidebar tittle="Pedido realizado - {ORDER_ID}">
    <div>
      <p></p>
      <Button
        type="button"
        title="Clique para adicionar este item ao carrinho"
        size="big"
        width="344px"
      >
        <>Concluir</>
      </Button>
    </div>
  </Sidebar>
)

export default Confirmation
