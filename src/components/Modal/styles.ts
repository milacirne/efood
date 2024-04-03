import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../CategoryCard/styles'

export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  max-width: 1024px;
  padding: 32px;
  z-index: 1;
  background-color: ${colors.red};
  position: relative;
`
export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const ModalImage = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  margin-left: 24px;

  h4 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
  }

  p {
    margin: 16px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`

export const ModalButton = styled(Button)`
  color: ${colors.red};
  background-color: ${colors.darkBeige};
  padding: 4px 6.95px;
  width: 218px;
  margin: 0;

  &:hover {
    background-color: ${colors.beige};
    color: ${colors.red};
  }
`
