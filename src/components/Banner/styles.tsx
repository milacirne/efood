import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 36px;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    line-height: 37.5px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 28px;
      font-weight: 700;
    }
  }

  & > h1:first-child {
    margin-bottom: 156.5px;
    font-weight: 100;
`
