import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HomeItemType } from '../../pages/Home'
import { BannerStyle } from './styles'

const Banner = () => {
  const { id } = useParams()
  const [category, setCategory] = useState<HomeItemType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then((data) => setCategory(data))
  }, [id])
  return (
    <>
      {category && (
        <BannerStyle titleIsBold={false} image={category?.capa}>
          <h1>{category?.tipo}</h1>
          <h1>{category?.titulo}</h1>
        </BannerStyle>
      )}
    </>
  )
}

export default Banner
