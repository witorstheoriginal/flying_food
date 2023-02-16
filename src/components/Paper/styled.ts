import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export type PaperProps = {
  backgroundColor: ThemeColor
  rounded: boolean
  shadow: boolean
}

export const StyledPaper = styled.div<PaperProps>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  border-radius: ${({ theme, rounded }) => rounded && theme.radii[3]};
  box-shadow: ${({ theme, shadow }) => shadow && theme.spacings['sm']};
`
