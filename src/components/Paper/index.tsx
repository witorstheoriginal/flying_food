import React, { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledPaper } from './styled'

export type Props = {
  children: ReactNode
  className?: string
  backgroundColor?: ThemeColor
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
