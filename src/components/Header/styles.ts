import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import background from '../../assets/background.png'

export const HeaderBar = styled.header`
  background-image: url(${background});
  padding: 40px 0 65.5px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
    padding: 40px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 150px 0 36px;
    position: relative;
    font-size: 14px;
  }

  div {
    color: ${colors.red};
    font-weight: 900;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 16px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  li {
    width: 197px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 189px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: auto;
    }
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

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 28px;
      margin-top: 100px;
      line-height: 30px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 18px;
      line-height: 22px;
      line-height: 22px;
    }
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
      height: 24px;
    }
  }
`

export const Logo = styled.img`
  text-align: center;
  width: 125px;
  height: 57.5px;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
  }
`
