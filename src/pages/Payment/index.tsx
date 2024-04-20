import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import { RootReducer } from '../../store'
import { openDelivery, closePayment } from '../../store/reducers/checkout'

import { ValidationSchema } from '../../utils/validationSchema'
import { parseToBrl } from '../../utils'

import { Row, InputGroup } from './../../components/Aside/styles'

const Payment = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { paymentIsOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      if (currentValue.preco) {
        return (accumulator += currentValue.preco)
      }
      return 0
    }, 0)
  }

  const form = ValidationSchema()

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const openDeliveryClosePayment = () => {
    dispatch(openDelivery())
    dispatch(closePayment())
  }

  return (
    <Aside
      title={`Pagamento - Valor a pagar ${parseToBrl(getTotalPrice())}`}
      hasTitle
      className={paymentIsOpen ? 'is-open' : ''}
    >
      <form onSubmit={form.handleSubmit}>
        <Row>
          <InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input type="text" id="cardName" name="cardName" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
              mask="9999 9999 9999"
            />
          </InputGroup>
          <InputGroup maxWidth="87px">
            <label htmlFor="ccv">CCV</label>
            <InputMask
              type="text"
              id="ccv"
              name="ccv"
              value={form.values.ccv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('ccv') ? 'error' : ''}
              mask="999"
            />
          </InputGroup>
        </Row>
        <Row marginBottom="24px">
          <InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <InputMask
              type="text"
              id="expiresMonth"
              name="expiresMonth"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresMonth') ? 'error' : ''}
              mask="99"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <InputMask
              type="text"
              id="expiresYear"
              name="expiresYear"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresYear') ? 'error' : ''}
              mask="99"
            />
          </InputGroup>
        </Row>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          marginBottom="8px"
          type="submit"
          onClick={form.handleSubmit}
        >
          Finalizar pagamento
        </Button>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          onClick={openDeliveryClosePayment}
        >
          Voltar para a edição de endereço
        </Button>
      </form>
    </Aside>
  )
}

export default Payment
