import type { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

type Props = ComponentPropsWithoutRef<'p'> & {
  $tipo?: 'principal' | 'secundario'
}

export const P = styled.p<Props>`
  color: ${(props) => (props.$tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: 14px;
  line-height: 22px;
`
