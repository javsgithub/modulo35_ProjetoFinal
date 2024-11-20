import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  height: 24px;
  width: ${(props) => props.width};
  color: ${(props) => (props.size === 'big' ? colors.pink3 : colors.pink1)};
  background-color: ${(props) =>
    props.size === 'big' ? colors.pink2 : colors.pink3}};
  text-align: center;
  cursor: pointer;
`
export const ButtonLink = styled(Link)<Props>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  height: 24px;
  width: ${(props) => props.width};
  color: ${(props) => (props.size === 'big' ? colors.pink3 : colors.pink1)};
  background-color: ${(props) =>
    props.size === 'big' ? colors.pink2 : colors.pink3};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`
