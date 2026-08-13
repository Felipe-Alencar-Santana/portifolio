import type { ComponentPropsWithoutRef } from 'react'

import { P } from './styles'

type Props = ComponentPropsWithoutRef<'p'> & {
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P $tipo={tipo} $fontSize={fontSize}>
    {children}
  </P>
)

export default Paragrafo
export type { Props }
