import Button from '../Button'
import Sidebar from '../Sidebar/index'
import { useFormik } from 'formik'

const Delivery = () => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      deliveryAddress: '',
      city: '',
      zipcode: '',
      number: '',
      complement: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Sidebar tittle="Emtrega">
      <form onSubmit={form.handleSubmit}>
        <div>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div>
          <label htmlFor="deliveryAddress">Endereço</label>
          <input
            type=""
            id="deliveryAddress"
            name="deliveryAddress"
            value={form.values.deliveryAddress}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div>
          <div>
            <label htmlFor="zipcode">CEP</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={form.values.zipcode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        </div>
        <div>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <Button
          type="button"
          title="Clique para adicionar este item ao carrinho"
          size="big"
          width="344px"
        >
          <>Continuar com o pagamento</>
        </Button>
        <Button
          type="button"
          title="Clique para adicionar este item ao carrinho"
          size="big"
          width="344px"
        >
          <>Voltar para o carrinho</>
        </Button>
      </form>
    </Sidebar>
  )
}

export default Delivery
