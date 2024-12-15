import Button from '../Button'
import Sidebar from '../Sidebar/index'
import { useFormik } from 'formik'
import { Form, InputGroup, Row } from './style'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import {
  handleConfirmation,
  handlePayment,
  handleDelivery
} from '../../store/reducers/cart'

const Payment = () => {
  const dispatch = useDispatch()

  const backToDeliveryComponent = () => {
    dispatch(handleDelivery())
  }

  const hidePaymentComponent = () => {
    dispatch(handlePayment())
  }

  const showConfirmationComponent = () => {
    dispatch(handleConfirmation())
  }

  const form = useFormik({
    initialValues: {
      nameOnCard: '',
      cardNumber: '',
      cardCode: '',
      expiryMonth: '',
      expiryYear: ''
    },
    validationSchema: Yup.object({
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
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <Sidebar tittle="Pagamento Valor a pagar R$ 190,00">
      <Form onSubmit={form.handleSubmit}>
        <InputGroup>
          <label htmlFor="nameOnCard">Nome no Cartão</label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            value={form.values.nameOnCard}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('nameOnCard', form.errors.nameOnCard)}</small>
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
            />
            <small>
              {getErrorMessage('cardNumber', form.errors.cardNumber)}
            </small>
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
            />
            <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
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
            />
            <small>
              {getErrorMessage('expiryMonth', form.errors.expiryMonth)}
            </small>
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
            />
            <small>
              {getErrorMessage('expiryYear', form.errors.expiryYear)}
            </small>
          </InputGroup>
        </Row>
        <div className="button-spaces">
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="344px"
            onClick={() => {
              hidePaymentComponent()
              showConfirmationComponent()
            }}
          >
            <>Finalizar pagamento</>
          </Button>
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="344px"
            onClick={() => {
              hidePaymentComponent()
              backToDeliveryComponent()
            }}
          >
            <>Voltar para a edição de endereço</>
          </Button>
        </div>
      </Form>
    </Sidebar>
  )
}

export default Payment
