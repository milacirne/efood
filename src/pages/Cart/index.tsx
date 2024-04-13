import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import * as S from './styles'
import Aside from '../../components/Aside'
import { formatPrice } from '../../components/Modal'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleContinueToDelivery = () => {
    navigate('/delivery')
    dispatch(close())
  }

  return (
    <Aside hasTitle={false}>
      <>
        {items.map((item) => (
          <S.CartItem key={item.id}>
            <img src={item.foto} />
            <div>
              <h3>{item.nome}</h3>
              <h4>{formatPrice(item.preco)}</h4>
            </div>
            <button onClick={() => removeItem(item.id)} type="button" />
          </S.CartItem>
        ))}
        <S.Price>
          <span>Valor total</span>
          <span>{formatPrice(getTotalPrice())}</span>
        </S.Price>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          onClick={handleContinueToDelivery}
        >
          Continuar com a entrega
        </Button>
      </>
    </Aside>
  )
}

export default Cart
