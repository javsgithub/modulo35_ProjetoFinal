import Button from '../Button'
import Sidebar from '../Sidebar/index'
import { useFormik } from 'formik'

const Payment = () => {
  const form = useFormik({
    initialValues: {
      nameOnCard: '',
      cardNumber: '',
      cardCode: '',
      expiryMonth: '',
      expiryYear: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Sidebar tittle="Pagamento Valor a pagar R$ 190,00">
      <form>
        <div>
          <label htmlFor="nameOnCard">Nome no Cartão</label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            value={form.values.nameOnCard}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>

        <div>
          <div>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="cardCode">CVV</label>
            <input
              type="text"
              id="cardCode"
              name="cardCode"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="expiryMonth">Mês de vencimento</label>
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              value={form.values.expiryMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="expiryYear">Ano de vencimento</label>
            <input
              type="text"
              id="expiryYear"
              name="expiryYear"
              value={form.values.expiryYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        </div>
        <Button
          type="button"
          title="Clique para adicionar este item ao carrinho"
          size="big"
          width="344px"
        >
          <>Finalizar pagamento</>
        </Button>
        <Button
          type="button"
          title="Clique para adicionar este item ao carrinho"
          size="big"
          width="344px"
        >
          <>Voltar para a edição de endereço</>
        </Button>
      </form>
    </Sidebar>
  )
}

export default Payment
