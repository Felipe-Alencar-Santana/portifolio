import type { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

type Props = ComponentPropsWithoutRef<'p'> & {
  $tipo?: 'principal' | 'secundario'
  $fontSize?: number
}

export const P = styled.p<Props>`
  color: ${(props) => (props.$tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize + 'px' : '14px')};
  line-height: 22px;
`
