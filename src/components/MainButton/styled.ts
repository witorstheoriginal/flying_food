import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export type ButtonProps = {
  backgroundColor: ThemeColor
  size?: Size
}
export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  max-width: fit-content;
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
`
export const StyledIconButton = styled(StyledButton)`
  background: linear-gradient(#f9cf44, #eba636);
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  width: ${({ theme, size }) => theme.sizes[size || 'md']};
  border-radius: ${({ theme }) => theme.radii.at(4)}%;
`
