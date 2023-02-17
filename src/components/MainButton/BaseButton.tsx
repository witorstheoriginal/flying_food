import React, { ReactNode } from 'react'
import { StyledBaseButton, StyledBaseButtonProps } from './styled'

export type Props = {
  children: ReactNode
  className?: string
  squared?: boolean
} & StyledBaseButtonProps

export const BaseButton = ({
  children,
  squared = false,
  bgColor,
  radius,
  size,
  disabled = false,
  bold = false,
  outlined
}: Props) => {
  return (
    <StyledBaseButton
      squared={squared}
      bgColor={bgColor}
      radius={radius}
      size={size}
      disabled={disabled}
      bold={bold}
      outlined={outlined}
    >
      {children}
    </StyledBaseButton>
  )
}
