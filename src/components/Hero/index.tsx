import { HeaderContainer, HeroContainer, Logo } from './styles'

import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer>
    <HeaderContainer>
      <Logo src={logo} alt="Efood" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </HeaderContainer>
  </HeroContainer>
)

export default Hero
