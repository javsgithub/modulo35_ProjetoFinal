import { useDispatch, useSelector } from 'react-redux'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as Yup from 'yup'

import * as S from './style'
import Button from '../../components/Button'
import { RootReducer } from '../../store'
import { open, closeDelivery, clearState } from '../../store/reducers/cart'
import { formataNumero } from '../../components/Product'
import { Overlay } from '../Cart/style'

const Checkout = () => {
  const [goToPayment, setGoToPayment] = useState(false)
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()
  const { items, deliveryOpen } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      deliveryAddress: '',
      city: '',
      zipcode: '',
      number: '',
      complement: '',
      nameOnCard: '',
      cardNumber: '',
      cardCode: '',
      expiryMonth: '',
      expiryYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      deliveryAddress: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      zipcode: Yup.string()
        .min(14, 'O campo precisa ter 9 caracteres')
        .max(14, 'O campo precisa ter 9 caracteres')
        .required('Este campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O nome precisa ter pelo menos 1 caractere')
        .required('Este campo é obrigatório'),
      complement: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      nameOnCard: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('Este campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('Este campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('Este campo é obrigatório') : schema
      ),
      expiryMonth: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('Este campo é obrigatório') : schema
      ),
      expiryYear: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('Este campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.deliveryAddress,
            city: values.city,
            zipCode: values.zipcode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameOnCard,
            number: values.cardNumber,
            code: Number(values.zipcode),
            expires: {
              month: Number(values.expiryMonth),
              year: Number(values.expiryYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkImputContainError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const containError = isTouched && isInvalid

    return containError
  }

  return (
    <>
      {isSuccess && data ? (
        <S.MessageContainer>
          <Overlay />
          <S.ConfirmationMessage>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.ConfirmationMessage>
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="344px"
            onClick={() => {
              navigate('/')
              dispatch(closeDelivery())
              dispatch(clearState())
            }}
          >
            <>Concluir</>
          </Button>
        </S.MessageContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.DeliveryContainer className={deliveryOpen ? 'is-open' : ''}>
            <Overlay />
            <S.FormSidebar>
              <p>Entrega</p>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkImputContainError('receiver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="deliveryAddress">Endereço</label>
                <input
                  type="text"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={form.values.deliveryAddress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkImputContainError('deliveryAddress') ? 'error' : ''
                  }
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkImputContainError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="zipcode">CEP</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={form.values.zipcode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkImputContainError('zipcode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkImputContainError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkImputContainError('complement') ? 'error' : ''
                  }
                />
              </S.InputGroup>
              <S.ButtonContainer>
                <Button
                  type="button"
                  title="Clique para preencher os dados de pagamento"
                  size="big"
                  width="344px"
                  onClick={() => {
                    if (
                      form.values.receiver &&
                      form.values.deliveryAddress &&
                      form.values.city &&
                      form.values.zipcode &&
                      form.values.number
                    ) {
                      setGoToPayment(true)
                    } else {
                      alert('Preencha os campos obrigatórios!!')
                    }
                  }}
                >
                  <>Continuar com o pagamento</>
                </Button>
                <Button
                  type="button"
                  title="Clique para revisar os itens do seu carrinho"
                  size="big"
                  width="344px"
                  onClick={() => {
                    dispatch(open())
                    dispatch(closeDelivery())
                  }}
                >
                  <>Voltar para o carrinho</>
                </Button>
              </S.ButtonContainer>
            </S.FormSidebar>
          </S.DeliveryContainer>
          {goToPayment ? (
            <S.PaymentContainer>
              <S.FormSidebar>
                <p>
                  Pagamento Valor a pagar -{' '}
                  <span>{formataNumero(getTotalPrice())}</span>
                </p>
                <S.InputGroup>
                  <label htmlFor="nameOnCard">Nome no Cartão</label>
                  <input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    value={form.values.nameOnCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkImputContainError('nameOnCard') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('cardNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('cardCode') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row className="bottom-space">
                  <S.InputGroup>
                    <label htmlFor="expiryMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      id="expiryMonth"
                      name="expiryMonth"
                      value={form.values.expiryMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('expiryMonth') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiryYear">Ano de vencimento</label>
                    <input
                      type="text"
                      id="expiryYear"
                      name="expiryYear"
                      value={form.values.expiryYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('expiryYear') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.Row>
                <S.ButtonContainer className="button-spaces">
                  <Button
                    type="submit"
                    title="Clique para finalizar a sua compra"
                    size="big"
                    width="344px"
                  >
                    {isLoading ? <>Finalizando...</> : <>Finalizar pagamento</>}
                  </Button>
                  <Button
                    type="button"
                    title="Clique para editar o endereço de entrega"
                    size="big"
                    width="344px"
                    onClick={() => {
                      setGoToPayment(false)
                    }}
                  >
                    <>Voltar para a edição de endereço</>
                  </Button>
                </S.ButtonContainer>
              </S.FormSidebar>
            </S.PaymentContainer>
          ) : (
            <></>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
