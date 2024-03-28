import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: 700;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  display: block;
`

export const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  font-size: 12px;
  line-height: 14.06px;
  padding: 6px 4px;
  color: ${colors.darkBeige};
  background-color: ${colors.red};
  margin-left: 8px;
`

export const Infos = styled.div`
  padding: 8px;
  font-size: 14px;
  border-right: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};
`

export const NameRating = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 21.09px;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
  }
`

export const Rating = styled.div`
  display: flex;
  font-size: 18px;

  img {
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  color: ${colors.darkBeige};
  background-color: ${colors.red};
  cursor: pointer;
  padding: 4px 6px;
  font-weight: 700;
  border: none;
  transition: 0.5s all ease;

  &:hover {
    color: ${colors.beige};
  }
`
