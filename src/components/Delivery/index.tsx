import Button from '../Button'
import {
  Container,
  Overlay,
  InputGroup,
  Row,
  ButtonContainer
  // Form
} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataNumero } from '../Product'
import Confirmation from '../Confirmation'
import {
  hide,
  open,
  openDelivery,
  closeDelivery,
  openPayment,
  closePayment,
  openConfirmation
} from '../../store/reducers/cart'
import Sidebar from '../Sidebar'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Delivery = () => {
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()
  const { items, delivery, payment, confirmation, visible } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const hideComponent = () => {
    dispatch(hide())
  }

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
      nameOnCard: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      cardNumber: Yup.string()
        .min(13, 'O número precisa ter pelo menos 13 caracteres')
        .max(16, 'O número precisa ter no máximo 16 caracteres')
        .required('Este campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O número precisa 3 caracteres')
        .max(3, 'O número precisa ter 3 caracteres')
        .required('Este campo é obrigatório'),
      expiryMonth: Yup.string()
        .min(2, 'O número precisa 2 caracteres')
        .max(2, 'O número precisa ter 2 caracteres')
        .required('Este campo é obrigatório'),
      expiryYear: Yup.string()
        .min(4, 'O número precisa ter 4 caracteres')
        .max(4, 'O número precisa ter 4 caracteres')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.deliveryAddress,
            city: values.city,
            zipCode: values.zipcode,
            number: 12,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameOnCard,
            number: values.cardNumber,
            code: 123,
            expires: {
              month: 7,
              year: 2029
            }
          }
        },
        products: [
          {
            id: 1,
            price: 15
          }
        ]
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
    <Container className={visible ? 'show' : ''}>
      <Overlay onClick={hideComponent} />
      <form onSubmit={form.handleSubmit}>
        {delivery && (
          <Sidebar tittle="Entrega">
            <>
              <InputGroup>
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
              </InputGroup>
              <InputGroup>
                <label htmlFor="deliveryAddress">Endereço</label>
                <input
                  type=""
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={form.values.deliveryAddress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkImputContainError('deliveryAddress') ? 'error' : ''
                  }
                />
              </InputGroup>
              <InputGroup>
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
              </InputGroup>
              <Row>
                <InputGroup>
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
                </InputGroup>
                <InputGroup>
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
                </InputGroup>
              </Row>
              <InputGroup>
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
              </InputGroup>
              <ButtonContainer>
                <Button
                  type="button"
                  title="Clique para preencher os dados de pagamento"
                  size="big"
                  width="344px"
                  onClick={() => {
                    dispatch(openPayment())
                    dispatch(closeDelivery())
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
                    dispatch(hide())
                  }}
                >
                  <>Voltar para o carrinho</>
                </Button>
              </ButtonContainer>
            </>
          </Sidebar>
        )}
        {payment && (
          <Sidebar
            tittle={`Pagamento Valor a pagar ${formataNumero(getTotalPrice())}`}
          >
            <>
              <InputGroup>
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
              </InputGroup>
              <Row>
                <InputGroup>
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
                </InputGroup>
                <InputGroup>
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
                </InputGroup>
              </Row>
              <Row className="bottom-space">
                <InputGroup>
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
                </InputGroup>
                <InputGroup>
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
                </InputGroup>
              </Row>
              <ButtonContainer className="button-spaces">
                <Button
                  type="submit"
                  title="Clique para finalizar a sua compra"
                  size="big"
                  width="344px"
                  onClick={() => {
                    dispatch(openConfirmation())
                    dispatch(closePayment())
                  }}
                >
                  <>Finalizar pagamento</>
                </Button>
                <Button
                  type="button"
                  title="Clique para editar o endereço de entrega"
                  size="big"
                  width="344px"
                  onClick={() => {
                    dispatch(openDelivery())
                    dispatch(closePayment())
                  }}
                >
                  <>Voltar para a edição de endereço</>
                </Button>
              </ButtonContainer>
            </>
          </Sidebar>
        )}
        {confirmation && <Confirmation />}
      </form>
    </Container>
  )
}

export default Delivery
