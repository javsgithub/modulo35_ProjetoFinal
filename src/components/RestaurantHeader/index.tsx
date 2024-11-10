import { HeaderBar, HeroContainer, Logo } from './styles'
import { colors, Container } from '../../styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

// style={{ textDecoration: 'none' }}

const Header = () => (
  <HeroContainer>
    <Container>
      <HeaderBar>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '900',
            color: `${colors.pink3}`
          }}
          to="/"
        >
          <h3>Restaurantes</h3>
        </Link>
        <Logo src={logo} alt="Efood" />
        <b>
          <span>0</span>&nbsp;<span>produtos(s) no carrinho</span>
        </b>
      </HeaderBar>
    </Container>
  </HeroContainer>
)

export default Header
