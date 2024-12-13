import Button from '../Button'
import { SideBar, Container, Overlay, CartItem, Price } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, exclude } from '../../store/reducers/cart'
import { formataNumero } from '../Product'
import Delivery from '../Delivery'
import Payment from '../Payment'
import Confirmation from '../Confirmation'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
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
      <SideBar>
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
        <Price>
          <span>Valor total</span>
          <span>{formataNumero(getTotalPrice())}</span>
        </Price>
        <Button
          type="button"
          title="Clique para preencher os dados da entrega"
          size="big"
          width="344px"
        >
          <>Continuar com a entrega</>
        </Button>
      </SideBar>
      <Payment />
      <Delivery />
      <Confirmation />
    </Container>
  )
}

export default Cart
