import styled from 'styled-components'
import { colors } from '../../styles'

export interface ListProps {
  columns: string
  rows: string
  columnGap: string
  rowGap: string
}

export const Container = styled.div`
  padding: 80px 171px 120px;
  background-color: ${colors.beige};
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};
`
