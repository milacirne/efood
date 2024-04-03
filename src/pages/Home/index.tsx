import { useEffect, useState } from 'react'
import Body from '../../components/Body'
import Header from '../../components/Header'

export type HomeItemType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [categories, setCategories] = useState<HomeItemType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then((data) => setCategories(data))
  }, [])

  return (
    <>
      <Header />
      <Body
        data={categories}
        type="categoryCards"
        columns="repeat(2, 1fr)"
        rows="repeat(3, auto)"
        columnGap="80px"
        rowGap="48px"
      />
    </>
  )
}

export default Home
