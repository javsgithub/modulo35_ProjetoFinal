import Button from '../Button'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, exclude, openDelivery } from '../../store/reducers/cart'
import { formataNumero } from '../Product'
import { Navigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

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

  // if (items.length === 0) {
  //   return <Navigate to="/" />
  // }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.CartSidebar>
        <>
          {items.length === 0 ? (
            <S.EmptyCartMessage>O seu carrinho está vazio.</S.EmptyCartMessage>
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{formataNumero(item.preco!)}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id)} />
                  </S.CartItem>
                ))}
              </ul>
              <S.Price>
                <span>Valor total</span>
                <span>{formataNumero(getTotalPrice())}</span>
              </S.Price>
              <Button
                type="button"
                title="Clique para preencher os dados da entrega"
                size="big"
                width="344px"
                onClick={() => {
                  dispatch(close())
                  dispatch(openDelivery())
                }}
              >
                <>Continuar com a entrega</>
              </Button>
            </>
          )}
        </>
      </S.CartSidebar>
    </S.CartContainer>
  )
}

export default Cart
