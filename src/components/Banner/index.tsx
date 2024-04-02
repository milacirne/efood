import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryType } from '../../pages/Home'
import { BannerStyle } from './styles'

const Banner = () => {
  const { id } = useParams()
  const [categories, setCategories] = useState<CategoryType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then((data) => setCategories(data))
  }, [id])
  return (
    <>
      {categories && (
        <BannerStyle titleIsBold={false} image={categories?.capa}>
          <h1>{categories?.tipo}</h1>
          <h1>{categories?.titulo}</h1>
        </BannerStyle>
      )}
    </>
  )
}

export default Banner
