import styled from 'styled-components'
import background from '../../assets/background.png'
import { colors } from '../../styles'
import { Logo } from '../Header/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-image: url(${background});
  height: 298px;

  ul {
    display: flex;
    margin-bottom: 80px;

    a {
      cursor: pointer;
    }

    li:nth-child(2) {
      margin: 0 8px;
    }
  }

  p {
    font-size: 10px;
    line-height: 11.72px;
    text-align: center;
    color: ${colors.red};
  }
`

export const FooterLogo = styled(Logo)`
  margin-bottom: 32.5px;
`
