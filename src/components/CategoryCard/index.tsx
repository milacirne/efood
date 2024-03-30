import { Link } from 'react-router-dom'
import * as S from './styles'
import starRating from '../../assets/star-review.png'

type Props = {
  image: string
  tags: string[]
  title: string
  rating: number
  description: string
  to: string
}

const CategoryCard = ({
  image,
  tags,
  title,
  rating,
  description,
  to
}: Props) => {
  return (
    <S.Card>
      <S.Image src={image} />
      <S.TagsContainer>
        {tags.map((tag) => (
          <S.Tag key={tag}>{tag}</S.Tag>
        ))}
      </S.TagsContainer>
      <S.Infos>
        <S.NameRating>
          <h3>{title}</h3>
          <S.Rating>
            <p>{rating}</p>
            <img src={starRating} />
          </S.Rating>
        </S.NameRating>
        <S.Description>{description}</S.Description>
        <Link to={to}>
          <S.Button>Saiba mais</S.Button>
        </Link>
      </S.Infos>
    </S.Card>
  )
}

export default CategoryCard
