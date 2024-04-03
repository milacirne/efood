import * as S from './styles'
import close from '../../assets/icons/close.png'
import { ProductType } from '../../pages/Category'

interface ModalState {
  isVisible: boolean
  onClick: () => void
  product: ProductType | null
}

const Modal = ({ isVisible, onClick, product }: ModalState) => {
  if (!product) {
    return null
  }

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
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
          <button>Adicionar ao carrinho - {formatPrice(product.preco)}</button>
        </S.ModalText>
      </S.ModalContent>
      <div className="overlay" onClick={onClick}></div>
    </S.Modal>
  )
}

export default Modal
