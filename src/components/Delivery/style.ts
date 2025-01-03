import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  justify-content: flex-end;

  form {
    z-index: 1;
  }

  &.show {
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

// export const Form = styled.form`
//   z-index: 1;
// `

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
