import { useDispatch } from 'react-redux'
import Aside from '../../components/Aside'
import Button from '../../components/Button'
import { Row, InputGroup } from './styles'
import { open } from '../../store/reducers/cart'

const Checkout = () => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  return (
    <Aside title="Entrega" hasTitle>
      <>
        <Row>
          <InputGroup>
            <label htmlFor="client">Quem irá receber</label>
            <input type="text" id="client" name="client" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" name="address" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" name="city" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep" name="cep" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input type="text" id="number" name="number" />
          </InputGroup>
        </Row>
        <Row marginBottom="24px">
          <InputGroup>
            <label htmlFor="aditional">Complemento (opcional)</label>
            <input type="text" id="aditional" name="aditional" />
          </InputGroup>
        </Row>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          marginBottom="8px"
        >
          Continuar com o pagamento
        </Button>
        <Button
          width="100%"
          backgroundColor="beige"
          onClick={openCart}
          customPadding="4px 0"
        >
          Voltar para o carrinho
        </Button>
      </>
    </Aside>
  )
}

export default Checkout
