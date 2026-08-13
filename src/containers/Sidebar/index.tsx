import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titilo'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={20}>Felipe Alencar Santana</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          Desenvolvedor Front-End
        </Paragrafo>
        <Descricao $tipo="principal" $fontSize={12}>
          Engenheiro front-end
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SideBarContainer>
    </aside>
  )
}

export default Sidebar
