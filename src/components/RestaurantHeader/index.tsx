import { HeaderBar, HeaderContainer, Logo } from './styles'
import { colors, Container } from '../../styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <Container>
      <HeaderBar>
        <Link
          style={{
            fontSize: '18px',
            fontWeight: '900',
            textDecoration: 'none',
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
  </HeaderContainer>
)

export default Header
