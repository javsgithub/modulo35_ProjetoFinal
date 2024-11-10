import styled from 'styled-components'

import { colors } from '../../styles'

export const DishContainer = styled.li`
  width: 320px;
  height: 338px;
  background-color: ${colors.pink3};
  padding: 8px;
  font-size: 14px;
  color: ${colors.pink1};

  img {
    display: block;
    width: 100%;
  }
`
export const Title = styled.h3`
  display: inline-block;
  height: 21px;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-top: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 8px;
`
