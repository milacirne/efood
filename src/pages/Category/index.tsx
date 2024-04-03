import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Body from '../../components/Body'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

export type ProductType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Category = () => {
  const { id } = useParams()
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then((data) => setProducts(data.cardapio))
  }, [id])

  return (
    <>
      <Header />
      <Banner />
      <Body
        data={products}
        type="productCards"
        columns="repeat(3, 1fr)"
        rows="repeat(2, auto)"
        columnGap="40px"
        rowGap="32px"
      />
    </>
  )
}

export default Category
