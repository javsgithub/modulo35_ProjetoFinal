import styled from 'styled-components'
import { colors } from '../../styles'
import { CartContainer, CartSidebar } from '../Cart/style'

export const MessageContainer = styled(CartContainer)`
  display: none;
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

export const ConfirmationMessage = styled(CartSidebar)`
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${colors.pink2};
    margin-bottom: 24px;
  }
`

export const DeliveryContainer = styled(CartContainer)`
  display: none;

  .is-open {
    display: flex;
  }
`

export const PaymentContainer = styled(CartContainer)`
  display: flex;
`

export const FormSidebar = styled(CartSidebar)`
  p {
    color: ${colors.pink2};
    font-weight: bold;
    margin-bottom: 16px;
  }
`
