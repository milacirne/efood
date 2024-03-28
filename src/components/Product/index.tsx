import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => {
  return (
    <S.Card>
      <S.ProductImage src={image} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Card>
  )
}

export default Product
