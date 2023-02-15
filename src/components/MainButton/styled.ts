import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export type ButtonProps = {
  backgroundColor: ThemeColor
  className?: string
}
export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  max-width: fit-content;
  border-radius: ${({ className }) => (className === 'regularButton' ? '20px' : '100%')};
  padding-inline: ${({ className }) => className === 'regularButton' && '40px'};
  padding: ${({ className }) => className !== 'regularButton' && '13px'};
  background: ${({ className }) =>
    className !== 'regularButton' && 'linear-gradient(#f9cf44, #eba636)'};
  border: ${({ className }) => className !== 'regularButton' && '0px'};
`
