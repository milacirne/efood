import { useGetHomeItemsQuery } from '../../services/api'
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
  const { data: categories } = useGetHomeItemsQuery()

  if (categories) {
    return (
      <>
        <Header />
        <Body
          data={categories}
          type="homeCards"
          columns="repeat(2, 1fr)"
          rows="repeat(3, auto)"
          columnGap="80px"
          rowGap="48px"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
