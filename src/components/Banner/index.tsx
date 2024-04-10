import { useParams } from 'react-router-dom'
import { BannerStyle } from './styles'
import { useGetCategoryBannerQuery } from '../../services/api'

const Banner = () => {
  const { id } = useParams()

  const { data: category } = useGetCategoryBannerQuery(
    typeof id === 'string' ? id : ''
  )

  return (
    <>
      {category && (
        <BannerStyle image={category?.capa}>
          <div className="container">
            <h1>{category?.tipo}</h1>
            <h1>{category?.titulo}</h1>
          </div>
        </BannerStyle>
      )}
    </>
  )
}

export default Banner
