import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'

import { closeCheckout } from '../../store/reducers/checkout'

import { parseToBrl } from '../../utils'

import { Row, InputGroup } from './styles'

const Checkout = () => {
  const [isPayment, setIsPayment] = useState(false)
  const { checkoutIsOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase] = usePurchaseMutation()
  const dispatch = useDispatch()

  /* const openCart = () => {
    dispatch(closeCheckout())
  } */

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      if (currentValue.preco) {
        return (accumulator += currentValue.preco)
      }
      return 0
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      client: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      aditional: '',
      cardDisplayName: '',
      cardNumber: '',
      ccv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      client: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O nome é obrigatório'),
      address: Yup.string()
        .matches(
          /^[a-zA-Z\s]+$/,
          'O formato do endereço deve ser: "Rua/Avenida"'
        )
        .required('O endereço é obrigatório'),
      city: Yup.string()
        .min(2, 'A cidade deve ter pelo menos 2 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'A cidade só pode conter letras e espaços')
        .required('A cidade é obrigatória'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'O formato do CEP deve ser: "XXXXX-XXX"')
        .required('O CEP é obrigatório'),
      number: Yup.string()
        .matches(
          /^\d+[a-zA-Z]*$/,
          'O número do endereço deve ser um número inteiro positivo e pode conter letras'
        )
        .required('O número do endereço é obrigatório'),
      aditional: Yup.string()
        .max(50, 'O complemento não deve exceder 50 caracteres')
        .matches(
          /^[a-zA-Z0-9\s,.'-]*$/,
          'O complemento pode conter letras, números, espaços, vírgulas, pontos, apóstrofos e hifens'
        )
        .notRequired(),
      cardDisplayName: Yup.string()
        .min(2, 'O nome do titular do cartão deve ter pelo menos 2 caracteres')
        .matches(
          /^[a-zA-Z\s]+$/,
          'O nome do titular do cartão deve conter apenas letras e espaços'
        )
        .required('O nome do titular do cartão é obrigatório'),
      cardNumber: Yup.string()
        .matches(
          /^\d{13,19}$/,
          'O número do cartão deve conter entre 13 e 19 dígitos numéricos'
        )
        .required('O número do cartão é obrigatório'),
      ccv: Yup.string()
        .matches(/^\d{3,4}$/, 'O CCV deve conter 3 ou 4 dígitos')
        .required('O CCV é obrigatório'),
      expiresMonth: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])$/,
          'O mês de vencimento do cartão deve ser um número entre 01 e 12'
        )
        .required('O mês de vencimento é obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{4}$/, 'O ano de vencimento deve conter 4 dígitos')
        .required('O ano de vencimento do cartão é obrigatório')
    }),
    onSubmit: (values) => {
      console.log('Dados enviados:', values)
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.client,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.aditional
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.ccv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handlePayment = () => (
    <Aside
      title={`Pagamento - Valor a pagar ${parseToBrl(getTotalPrice())}`}
      hasTitle
      className={isPayment ? 'is-open' : ''}
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
          onClick={form.handleSubmit}
        >
          Finalizar pagamento
        </Button>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          onClick={() => setIsPayment(false)}
        >
          Voltar para a edição de endereço
        </Button>
      </>
    </Aside>
  )

  const handleDelivery = () => (
    <Aside title="Entrega" hasTitle>
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
          onClick={() => setIsPayment(true)}
        >
          Continuar com o pagamento
        </Button>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          /* onClick={openCart} */
        >
          Voltar para o carrinho
        </Button>
      </form>
    </Aside>
  )

  return isPayment ? handlePayment() : handleDelivery()
}

export default Checkout
