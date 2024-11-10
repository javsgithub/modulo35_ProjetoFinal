import styled from 'styled-components'

import { colors, Container } from '../../styles'

import vector from '../../assets/images/vector.png'

export const HeroContainer = styled.header`
  padding: 40px 0 64px;
  background-image: url(${vector});

  ${Container} {
    margin: 0 auto;
  }
`
export const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.pink3};
  font-size: 18px;
  font-weight: 900;

  b {
    display: flex;
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  height: 58px;
  cursor: pointer;
`
