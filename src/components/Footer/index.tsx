import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/logo.png'

import instagram from '../../assets/footer/instagram.png'
import facebook from '../../assets/footer/facebook.png'
import twitter from '../../assets/footer/twitter.png'

const Footer = () => {
  return (
    <S.FooterContainer>
      <Link to="/">
        <S.FooterLogo src={logo} />
      </Link>
      <S.IconsContainer>
        <li>
          <a>
            <img src={instagram} />
          </a>
        </li>
        <li>
          <a>
            <img src={facebook} />
          </a>
        </li>
        <li>
          <a>
            <img src={twitter} />
          </a>
        </li>
      </S.IconsContainer>
      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </S.Text>
    </S.FooterContainer>
  )
}

export default Footer
