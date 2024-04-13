import { useDispatch } from 'react-redux'
import * as S from './styles'
import close from '../../assets/icons/close.png'
import { CategoryItemType } from '../../pages/Category'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button'

interface ModalState {
  isVisible: boolean
  onClick: () => void
  product: CategoryItemType | null
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Modal = ({ isVisible, onClick, product }: ModalState) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    if (product) {
      dispatch(add(product))
      dispatch(open())
    }
  }

  if (!product) {
    return null
  }

  return (
    <S.Modal className={isVisible ? 'visible' : ''}>
      <S.ModalContent>
        <S.Close src={close} onClick={onClick} />
        <S.ModalImage src={product.foto} />
        <S.ModalText>
          <h4>{product.nome}</h4>
          <p>
            {product.descricao} <br />
            <br />
            Serve: de {product.porcao}
          </p>
          <Button
            width="auto"
            backgroundColor="beige"
            customPadding="4px 6.95px"
            onClick={addToCart}
          >
            Adicionar ao carrinho - {formatPrice(product.preco)}
          </Button>
        </S.ModalText>
      </S.ModalContent>
      <div className="overlay" onClick={onClick}></div>
    </S.Modal>
  )
}

export default Modal
