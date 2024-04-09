import styled from 'styled-components'
import { colors } from '../../styles'

type BannerProps = {
  image: string
}

export const BannerStyle = styled.div<BannerProps>`
  padding: 24px 170px 32px;
  color: ${colors.white};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(${(props) => props.image});
  background-size: cover;
  background-position: 88% 49%;

  h1 {
    font-size: 32px;
    font-weight: 900;
    line-height: 37.5px;
  }

  & > h1:first-child {
    margin-bottom: 156.5px;
    font-weight: 100;
`
