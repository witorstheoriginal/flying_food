import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export type ButtonProps = {
  backgroundColor: ThemeColor
  className?: string
}
export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  max-width: fit-content;
`
