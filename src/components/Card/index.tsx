import React, { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { Paper } from '../Paper'
import { StyledCard } from './styled'

export type CardProps = {
  children?: ReactNode
  className?: string
  backgroundColor?: ThemeColor
  paperColor?: ThemeColor
  rounded?: boolean
  shadow?: boolean
}

export const Card = ({
  children,
  backgroundColor = 'secondary',
  paperColor,
  rounded = true,
  shadow = true
}: CardProps) => {
  return (
    <StyledCard backgroundColor={backgroundColor} rounded={rounded} shadow={shadow} ><Paper backgroundColor={paperColor} rounded={rounded} shadow={shadow}>{children}</Paper></StyledCard>
  )
}
