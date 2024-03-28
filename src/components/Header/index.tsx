import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/logo.png'

type Props = {
  category: string
  fancyCategoryName: string
  image: string
}

const Header = ({ category, fancyCategoryName, image }: Props) => {
  return (
    <>
      <S.Container>
        <Link to="/">
          <a>Restaurantes</a>
        </Link>
        <S.HeaderLogo src={logo} />
        <a>0 produto(s) no carrinho</a>
      </S.Container>
      <S.Banner image={image}>
        <S.Title bold={false}>{category}</S.Title>
        <S.Title bold>{fancyCategoryName}</S.Title>
      </S.Banner>
    </>
  )
}

export default Header
