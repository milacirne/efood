import styled from 'styled-components'
import { colors } from '../../styles'
import background from '../../assets/background.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${background});
  padding: 40px 171px 65.5px;
  color: ${colors.red};
  font-weight: 900;
  font-size: 18px;

  li {
    width: 197px;
  }

  li:nth-child(2) {
    display: flex;
    justify-content: center;
  }

  a {
    cursor: pointer;
    color: ${colors.red};
  }

  h2 {
    margin-top: 138.5px;
    font-size: 36px;
    font-weight: 900;
    color: ${colors.red};
    line-height: 42.19px;
    text-align: center;
    padding: 0;
  }

  .invisible {
    display: none;
  }

  &.isHome {
    padding: 40px 0;
    flex-direction: column;
    color: blue;

    li:nth-child(2) {
      width: auto;
      height: 57.5px;
    }
  }
`

export const Logo = styled.img`
  text-align: center;
  width: 125px;
  height: 57.5px;
  justify-content: center;
`
