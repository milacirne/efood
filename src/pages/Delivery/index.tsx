import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'
import { closeDelivery, openPayment } from '../../store/reducers/checkout'

import { ValidationSchema } from '../../utils/validationSchema'

import { Row, InputGroup } from './../../components/Aside/styles'

const Delivery = () => {
  const { deliveryIsOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()

  const form = ValidationSchema()

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const openCartCloseDelivery = () => {
    dispatch(closeDelivery())
    dispatch(openCart())
  }

  const openPaymentDetails = () => {
    dispatch(openPayment())
    dispatch(closeDelivery())
  }

  return (
    <Aside title="Entrega" hasTitle className={deliveryIsOpen ? 'is-open' : ''}>
      <form onSubmit={form.handleSubmit}>
        <Row>
          <InputGroup>
            <label htmlFor="client">Quem irá receber</label>
            <input
              type="text"
              id="client"
              name="client"
              value={form.values.client}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('client') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <InputMask
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cep') ? 'error' : ''}
              mask="99999-999"
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
              className={checkInputHasError('number') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Row marginBottom="24px">
          <InputGroup>
            <label htmlFor="aditional">Complemento (opcional)</label>
            <input
              type="text"
              id="aditional"
              name="aditional"
              value={form.values.aditional}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('aditional') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          marginBottom="8px"
          onClick={openPaymentDetails}
          type="button"
        >
          Continuar com o pagamento
        </Button>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          onClick={openCartCloseDelivery}
          type="button"
        >
          Voltar para o carrinho
        </Button>
      </form>
    </Aside>
  )
}

export default Delivery
