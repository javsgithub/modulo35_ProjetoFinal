import styled from 'styled-components'
import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartSidebar = styled.aside`
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

  &.invisible {
    display: none;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 8px 16px;
  margin-bottom: 16px;
  background-color: ${colors.pink2};
  color: ${colors.pink3};
  position: relative;

  img {
    height: 80px;
    width: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400px;
    linhe-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    height: 16px;
    width: 16px;
    position: absolute;
    right: 8px;
    bottom: 8px;
    border: none;
    background-color: transparent;
  }
`
export const EmptyCartMessage = styled.p`
  color: ${colors.pink2};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  }
`

export const Price = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${colors.pink2};
  font-size: 14px;
  font-weight: 700px;
  line-height: 16px;
  margin: 40px 0 16px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 16px;
`

export const InputGroup = styled.div`
  label {
    font-size: 14px;
    fontt-weight: 700;
    line-height: 16px;
    color: ${colors.pink2};
  }

  input {
    height: 32px;
    width: 100%;
    background-color: ${colors.pink2};
    border: 1px solid ${colors.pink2};
    padding: 0 8px;
    margin: 8px 0;

    &.error {
      border: 1px solid red;
    }
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
`
