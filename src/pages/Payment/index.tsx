import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Aside from '../../components/Aside'
import Button from '../../components/Button'
import { Row, InputGroup } from '../Checkout/styles'
import { formatPrice } from '../../components/Modal'

const Payment = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <Aside
      title={`Pagamento - Valor a pagar ${formatPrice(getTotalPrice())}`}
      hasTitle
    >
      <>
        <Row>
          <InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input type="text" id="cardName" name="cardName" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input type="text" id="cardNumber" name="cardNumber" />
          </InputGroup>
          <InputGroup maxWidth="87px">
            <label htmlFor="ccv">CCV</label>
            <input type="text" id="ccv" name="ccv" />
          </InputGroup>
        </Row>
        <Row marginBottom="24px">
          <InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input type="text" id="expiresMonth" name="expiresMonth" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input type="text" id="expiresYear" name="expiresYear" />
          </InputGroup>
        </Row>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          marginBottom="8px"
        >
          Finalizar pagamento
        </Button>
        <Button width="100%" backgroundColor="beige" customPadding="4px 0">
          Voltar para a edição de endereço
        </Button>
      </>
    </Aside>
  )
}

export default Payment
