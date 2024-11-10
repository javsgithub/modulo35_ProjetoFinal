import styled from 'styled-components'
import { Container } from '../../styles'

export const Dishes = styled.ul`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  ${Container} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
`
