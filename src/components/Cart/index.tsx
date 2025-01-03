import Button from '../Button'
import { Container, Overlay, CartItem, Price, EmptyCartMessage } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, exclude, openDelivery, show } from '../../store/reducers/cart'
import { formataNumero } from '../Product'
import { SideBarStyles } from './style'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout')
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(exclude(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBarStyles>
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
              goToCheckout()
              dispatch(close())
              dispatch(openDelivery())
              dispatch(show())
            }}
          >
            <>Continuar com a entrega</>
          </Button>
        </>
      </SideBarStyles>
    </Container>
  )
}

export default Cart
