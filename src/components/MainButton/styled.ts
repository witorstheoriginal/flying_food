import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export type StyledBaseButtonProps = {
  bgColor: ThemeColor
  radius: number
  size: Size
  disabled?: boolean
  bold?: boolean
  outlined: boolean
  squared?: boolean
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  background-color: ${({ theme, bgColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[bgColor]};
  padding: ${({ theme, size }) =>
    theme.sizes[size] / 2 + 'px ' + theme.sizes[size] + 'px'};
  border-radius: ${({ theme, radius, squared }) =>
    !squared && theme.radii[radius] + 'px'};
  pointer-events: ${({ disabled }) => disabled && 'none'};
  font-weight: ${({ bold }) => bold && 'bold'};
  max-width: fit-content;
`
