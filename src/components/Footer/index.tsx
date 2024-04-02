import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/logo.png'

import instagram from '../../assets/footer/instagram.png'
import facebook from '../../assets/footer/facebook.png'
import twitter from '../../assets/footer/twitter.png'

const Footer = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.FooterLogo src={logo} />
      </Link>
      <ul>
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
      </ul>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </S.Container>
  )
}

export default Footer
