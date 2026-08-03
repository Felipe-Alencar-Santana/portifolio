import Titulo from '../../components/Titilo'
import Paragrafo from '../../components/Paragrafo'
import { GithubStats } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre o Desenvolvedor</Titulo>
    <Paragrafo>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto incidunt,
      officia nihil voluptates obcaecati repellat nobis. Eum molestiae vero unde
      sit non, perspiciatis eaque, mollitia rerum excepturi voluptatibus illum
      minus.
    </Paragrafo>
    <GithubStats>
      <img src="https://github-readme-stats.vercel.app/api?username=Felipe-Alencar-Santana&show_icons=true&theme=dark" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Felipe-Alencar-Santana&hide_progress=FALSE&theme=dark" />
    </GithubStats>
  </section>
)

export default Sobre
