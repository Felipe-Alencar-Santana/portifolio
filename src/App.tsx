import Projeto from './containers/Projeto'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projeto />
        </main>
      </Container>
    </>
  )
}

export default App
