import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export type StyledCardProps = {
  backgroundColor: ThemeColor
  rounded: boolean
  shadow: boolean
}

export const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  border-radius: ${({ theme, rounded }) => rounded && theme.radii[2] + 'px'};
  box-shadow: ${({ theme, shadow }) =>
    shadow && '0px 0px ' + theme.spacings['lg'] + 'px 0px #a1a1a1'};
  height: 272px;
  padding-left: 20px;
  top: 50%;
  width: 214px;
  z-index: -2;
`
