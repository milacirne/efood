import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export interface ListProps {
  columns: string
  rows: string
  columnGap: string
  rowGap: string
}

export const Container = styled.div`
  padding: 80px 171px 120px;
  background-color: ${colors.beige};

  @media (max-width: ${breakpoints.desktop}) {
    padding: 60px 120px 100px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 36px;
  }
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    row-gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
