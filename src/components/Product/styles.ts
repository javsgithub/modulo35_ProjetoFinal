import styled from 'styled-components'

import { colors } from '../../styles'

export const DishContainer = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${colors.pink3};
  padding: 32px;
  font-size: 14px;
  color: ${colors.pink1};
  display: flex;
  position: absolute;

  img {
    display: block;
    width: 280px;
    height: 280px;
  }

  .closingImage {
    height: 16px;
    width: 16px;
    color: ${colors.pink1};
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .content {
    margin-left: 24px;
  }
`
export const Title = styled.h3`
  display: inline-block;
  height: 21px;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 8px;
`
