import { Link, useParams } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { CategoryType } from '../../pages/Home'

const Header = () => {
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
      <S.Container>
        <Link to="/">
          <a>Restaurantes</a>
        </Link>
        <Link to="/">
          <S.HeaderLogo src={logo} />
        </Link>
        <a>0 produto(s) no carrinho</a>
      </S.Container>
      {categories && (
        <S.Banner image={categories?.capa}>
          <S.Title bold={false}>{categories?.tipo}</S.Title>
          <S.Title bold>{categories?.titulo}</S.Title>
        </S.Banner>
      )}
    </>
  )
}

export default Header
