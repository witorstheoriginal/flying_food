import { ReactNode } from 'react'
import { StyledText, StyledTextProps } from './styled'

export type Props = {
  children: ReactNode
} & Partial<StyledTextProps>

export const Text = ({
  children,
  variant = 'p',
  bold,
  color = 'text',
  size = 'md',
  upperCase = false,
  capitalize = false,
  centered,
  inline
}: Props) => {
  console.log(upperCase, capitalize)
  return (
    <StyledText
      as={variant}
      bold={bold}
      color={color}
      size={size}
      upperCase={upperCase}
      capitalize={capitalize}
      centered={centered}
      inline={inline}
      variant={variant}
    >
      {children}
    </StyledText>
  )
}

/* color: ThemeColor
  variant: TextVariant
  size: FontSize
  bold?: boolean
  upperCase?: boolean
  capitalize?: boolean
  centered?: boolean
  inLine?: boolean*/
