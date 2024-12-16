import Button from '../Button'
import { Container, Overlay, CartItem, Price, EmptyCartMessage } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, exclude } from '../../store/reducers/cart'
import { formataNumero } from '../Product'
import Delivery from '../Delivery'
import Payment from '../Payment'
import Confirmation from '../Confirmation'
import { SideBarStyles } from './style'
import { handleCartSidebar, handleDelivery } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items, cartSidebar, delivery, payment, confirmation } =
    useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(handleCartSidebar())
  }

  const showDeliveryComponent = () => {
    dispatch(handleDelivery())
  }

  const hideCartSideBar = () => {
    dispatch(handleCartSidebar())
  }

  const removeItem = (id: number) => {
    dispatch(exclude(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBarStyles className={cartSidebar ? '' : 'invisible'}>
        <>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataNumero(item.preco!)}</p>
                </div>
                <button type="button" onClick={() => removeItem(item.id)} />
              </CartItem>
            ))}
          </ul>
          <EmptyCartMessage className={items.length === 0 ? 'visible' : ''}>
            O seu carrinho está vazio.
          </EmptyCartMessage>
          <Price>
            <span>Valor total</span>
            <span>{formataNumero(getTotalPrice())}</span>
          </Price>
          <Button
            type="button"
            title="Clique para preencher os dados da entrega"
            size="big"
            width="344px"
            onClick={() => {
              hideCartSideBar()
              showDeliveryComponent()
            }}
          >
            <>Continuar com a entrega</>
          </Button>
        </>
      </SideBarStyles>
      {delivery && <Delivery />}
      {payment && <Payment />}
      {confirmation && <Confirmation />}
    </Container>
  )
}

export default Cart
