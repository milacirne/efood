import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const ProductCard = ({ image, title, description, onClick }: Props) => {
  return (
    <S.Card>
      <S.ProductImage src={image} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button onClick={onClick}>Mais detalhes</S.Button>
    </S.Card>
  )
}

export default ProductCard
