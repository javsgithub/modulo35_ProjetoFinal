import styled from 'styled-components'
import { colors } from '../../styles'

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 70px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    color: ${colors.pink3};
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
`

export const Container = styled.form`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;

  form {
    z-index: 1;
  }

  &.hide {
    display: none;
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

export const ButtonContainer = styled.div`
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
