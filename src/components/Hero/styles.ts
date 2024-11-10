import styled from 'styled-components'

import { colors } from '../../styles'

import vector from '../../assets/images/vector.png'

export const HeroContainer = styled.header`
  padding: 40px 0 64px;
  height: 360px;
  background-image: url(${vector});
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin-top: 138px;
    color: ${colors.pink3};
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;
    text-align: center;
    width: 542px;
    height: 84px;
  }
`
export const Logo = styled.img`
  height: 58px;
  cursor: pointer;
`
