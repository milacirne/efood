import styled from 'styled-components'
import { Logo } from '../HomeHeader/styles'
import { colors } from '../../styles'
import background from '../../assets/background.png'

type TitleProps = {
  bold: boolean
}

type BannerProps = {
  image: string
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 171px 65.5px;
  background-image: url(${background});
  color: ${colors.red};
  font-weight: 900;
  font-size: 18px;

  a {
    cursor: pointer;
    color: ${colors.red};
  }
`

export const HeaderLogo = styled(Logo)`
  margin-bottom: 0;
  margin-left: 89px;
  text-align: center;
`

export const Title = styled.h1<TitleProps>`
  font-size: 32px;
  font-weight: ${(props) => (props.bold ? 900 : 100)};
  line-height: 37.5px;
`

export const Banner = styled.div<BannerProps>`
  padding: 24px 170px 32px;
  color: ${colors.white};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-size: cover;
  background-position: 88% 49%;

  & > ${Title}:first-child {
    margin-bottom: 156.5px;
  }
`
