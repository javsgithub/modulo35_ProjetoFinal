import { HeaderBar, HeaderContainer, Logo } from './styles'
import { colors, Container } from '../../styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => dispatch(open())

  return (
    <HeaderContainer>
      <Container>
        <HeaderBar>
          <p className="title">
            <Link
              style={{
                textDecoration: 'none',
                color: `${colors.pink3}`
              }}
              to="/"
            >
              Restaurantes
            </Link>
          </p>
          <Logo src={logo} alt="Efood" />
          <b
            onClick={() => {
              openCart()
            }}
          >
            <span>{items.length}</span>&nbsp;
            <span>produtos(s) no carrinho</span>
          </b>
        </HeaderBar>
      </Container>
    </HeaderContainer>
  )
}

export default Header
