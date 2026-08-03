import { Titulo as TituloEstilo } from './styles'

type Props = {
  children: React.ReactNode
  fontSize?: number
}

const Titulo = ({ children, fontSize }: Props) => (
  <TituloEstilo $fontSize={fontSize}>{children}</TituloEstilo>
)

export default Titulo
export type { Props }
