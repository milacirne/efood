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
      <S.ProductDescription>{description}</S.ProductDescription>
      <S.ProductButton onClick={onClick}>Mais detalhes</S.ProductButton>
    </S.Card>
  )
}

export default ProductCard
