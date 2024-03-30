import styled from 'styled-components'
import { colors } from '../../styles'
import { Image } from '../CategoryCard/styles'

export const Card = styled.div`
  background-color: ${colors.red};
  color: ${colors.darkBeige};
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
`

export const ProductImage = styled(Image)`
  height: 167px;
  border-radius: 8px;
  object-fit: cover;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  margin: 8px 0;
`

export const Description = styled.p`
  font-weight: 400;
  line-height: 22px;
  min-height: 176px;
`

export const Button = styled.button`
  color: ${colors.red};
  background-color: ${colors.darkBeige};
  width: 100%;
  font-weight: 700;
  line-height: 16.41px;
  cursor: pointer;
  padding: 4px 0;
  border: none;
  transition: 0.5s all ease;
  margin-top: 8px;

  &:hover {
    background-color: ${colors.beige};
  }
`
