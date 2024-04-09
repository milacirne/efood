import { useParams } from 'react-router-dom'
import { useGetCategoryProductsQuery } from '../../services/api'
import Body from '../../components/Body'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

export type CategoryItemType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Category = () => {
  const { id } = useParams()

  const { data: products } = useGetCategoryProductsQuery(
    typeof id === 'string' ? id : ''
  )

  if (products) {
    return (
      <>
        <Header />
        <Banner />
        <Body
          data={products}
          type="categoryCards"
          columns="repeat(3, 1fr)"
          rows="repeat(2, auto)"
          columnGap="40px"
          rowGap="32px"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Category
