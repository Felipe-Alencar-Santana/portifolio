import type { ComponentPropsWithoutRef } from 'react'

import { P } from './styles'

type Props = ComponentPropsWithoutRef<'p'> & {
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P $tipo={tipo}>{children}</P>
)

export default Paragrafo
export type { Props }
