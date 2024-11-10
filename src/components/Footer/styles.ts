import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${colors.pink2};
  color: ${colors.pink3};
  padding: 40px 0 64px;
  margin-top: 120px;
  text-align: center;
`
export const SocialMediaContainer = styled.div`
  width: 88px;
  height: 24px;
  margin: 32px auto 80px;
  text-align: center;
  display: flex;
  justify-content: space-between;

  img {
    height: 24px;
    margin: 0 2px;
    cursor: pointer;
  }
`
export const Paragraph = styled.p`
  width: 480px;
  height: 24px;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  line-height: 12px;
  display: inline-block;
`
