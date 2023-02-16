import { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledPaper } from './styled'

export type Props = {
  backgroundColor?: ThemeColor
  children: ReactNode
  className?: string
  rounded?: boolean
  shadow?: boolean
}

export const Paper = ({
  backgroundColor = 'textInverse',
  children,
  rounded = true,
  shadow = true
}: Props) => {
  return (
    <StyledPaper backgroundColor={backgroundColor} rounded={rounded} shadow={shadow}>
      {children}
    </StyledPaper>
  )
}
