import styled from 'styled-components'
import { colors } from '../../styles'

export const Form = styled.form`
  .button-spaces {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-top: 16px;
  }
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
    // color: #000;
    background-color: ${colors.pink2};
    border: 1px solid ${colors.pink2};
    padding: 0 8px;
    margin: 8px 0;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
`
