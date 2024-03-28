import styled from 'styled-components'
import { Container, Logo } from '../HomeHeader/styles'
import { colors } from '../../styles'

export const FooterContainer = styled(Container)`
  height: 298px;
`

export const FooterLogo = styled(Logo)`
  margin-bottom: 32.5px;
`

export const IconsContainer = styled.ul`
  display: flex;
  margin-bottom: 80px;

  a {
    cursor: pointer;
  }

  li:nth-child(2) {
    margin: 0 8px;
  }
`

export const Text = styled.p`
  font-size: 10px;
  line-height: 11.72px;
  text-align: center;
  color: ${colors.red};
`
