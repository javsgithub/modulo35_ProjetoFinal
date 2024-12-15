import styled from 'styled-components'
import { colors } from '../../styles'

export const SideBarStyles = styled.aside`
  height: 100%;
  width: 360px;
  padding: 32px 8px 0 8px;
  background: ${colors.pink3};
  z-index: 1;

  h2 {
    font-size: 16px;
    fonte-weight: 700;
    line-height: 19px;
    color: ${colors.pink2};
    margin-bottom: 16px;
  }

  &.is-closed {
    display: none;
  }
`
