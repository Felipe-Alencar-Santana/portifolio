import type { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type botaoProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<botaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decorantion: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Olá</Botao>
      <Botao fontSize="14px" principal={false}>
        Olá
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>perigo</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
