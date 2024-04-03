import styled from 'styled-components'
import { colors } from '../../styles'
import { Image } from '../CategoryCard/styles'
import { Button, Description } from '../CategoryCard/styles'

export const Card = styled.div`
  background-color: ${colors.red};
  color: ${colors.darkBeige};
  padding: 8px;
  border-radius: 8px;
`

export const ProductImage = styled(Image)`
  height: 167px;
  border-radius: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  margin: 8px 0;
`

export const ProductDescription = styled(Description)`
  min-height: 176px;
  margin-bottom: 8px;
`

export const ProductButton = styled(Button)`
  color: ${colors.red};
  background-color: ${colors.darkBeige};
  width: 100%;
  padding: 4px 0;

  &:hover {
    background-color: ${colors.beige};
    color: ${colors.red};
  }
`
