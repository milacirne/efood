import styled from 'styled-components'
import { colors } from '../../styles'
import background from '../../assets/background.png'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-image: url(${background});
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 138.5px;
`

export const Text = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.red};
  line-height: 42.19px;
  text-align: center;
`
