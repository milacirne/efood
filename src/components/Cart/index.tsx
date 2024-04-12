import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../Modal'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
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
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </S.Price>
        <S.CartButton>Continuar com a entrega</S.CartButton>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
