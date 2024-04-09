import styled from 'styled-components'
import { colors } from '../styles'
import { Button } from '../components/CategoryCard/styles'
import litter from '../assets/icons/litter.png'

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
`

export const CartItem = styled.div`
  display: flex;
  background-color: ${colors.darkBeige};
  padding: 8px 8px 12px;
  color: ${colors.red};
  margin-bottom: 16px;
  position: relative;

  h3 {
    font-size: 18px;
    line-height: 21.09px;
    font-weight: 900;
  }

  h4 {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-top: 16px;
  }

  button {
    background-image: url(${litter});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  color: ${colors.darkBeige};

  p {
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 700;
  }
`

export const CartButton = styled(Button)`
  width: 100%;
  background-color: ${colors.darkBeige};
  color: ${colors.red};

  &:hover {
    background-color: ${colors.beige};
    color: ${colors.red};
  }
`
