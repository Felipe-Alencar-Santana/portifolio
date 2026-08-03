import type { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  $fontSize?: number
  children?: ReactNode
}

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}px` : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
