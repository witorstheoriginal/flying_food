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
  align-items: center;
  background-color: ${({ theme, bgColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[bgColor]};
  border-radius: ${({ theme, radius, squared }) =>
    !squared && theme.radii[radius] + 'px'};
  display: flex;
  font-weight: ${({ bold }) => bold && 'bold'};
  height: ${({ theme, size }) => theme.sizes[size] / 2 + 'px'};
  justify-content: center;
  max-width: fit-content;
  padding-block: ${({ theme }) => theme.spacings.md + 'px'};
  padding-inline: ${({ theme }) => theme.spacings.xl + 'px'};
  pointer-events: ${({ disabled }) => disabled && 'none'};
  width: ${({ theme, size }) => theme.sizes[size] + 'px'};
`
