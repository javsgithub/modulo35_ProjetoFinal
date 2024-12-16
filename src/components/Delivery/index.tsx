import Button from '../Button'
import Sidebar from '../Sidebar/index'
import { useFormik } from 'formik'
import { Form, InputGroup, Row } from './styles'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import {
  handleCartSidebar,
  handlePayment,
  handleDelivery
} from '../../store/reducers/cart'

const Delivery = () => {
  const dispatch = useDispatch()

  const backToCartSideBar = () => {
    dispatch(handleCartSidebar())
  }

  const hideDeliveryComponent = () => {
    dispatch(handleDelivery())
  }

  const showPaymentComponent = () => {
    dispatch(handlePayment())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      deliveryAddress: '',
      city: '',
      zipcode: '',
      number: '',
      complement: ''
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
    <Sidebar tittle="Emtrega">
      <Form onSubmit={form.handleSubmit}>
        <InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
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
          />
          <small>
            {getErrorMessage('deliveryAddress', form.errors.deliveryAddress)}
          </small>
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
          />
          <small>{getErrorMessage('city', form.errors.city)}</small>
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
            />
            <small>{getErrorMessage('zipcode', form.errors.zipcode)}</small>
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
            />
            <small>{getErrorMessage('number', form.errors.number)}</small>
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
          />
          <small>{getErrorMessage('complement', form.errors.complement)}</small>
        </InputGroup>
        <div className="button-spaces">
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="344px"
            onClick={() => {
              showPaymentComponent()
              hideDeliveryComponent()
            }}
          >
            <>Continuar com o pagamento</>
          </Button>
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="344px"
            onClick={() => {
              backToCartSideBar()
              hideDeliveryComponent()
            }}
          >
            <>Voltar para o carrinho</>
          </Button>
        </div>
      </Form>
    </Sidebar>
  )
}

export default Delivery
