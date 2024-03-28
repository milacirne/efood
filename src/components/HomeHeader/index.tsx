import * as S from './styles'
import logo from '../../assets/logo.png'

const HomeHeader = () => {
  return (
    <S.Container>
      <S.Logo src={logo} />
      <S.Text>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </S.Text>
    </S.Container>
  )
}

export default HomeHeader
