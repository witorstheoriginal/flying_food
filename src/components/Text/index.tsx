import { ReactNode } from 'react'
import { StyledText, StyledTextProps } from './styled'

export type Props = {
  children: ReactNode
} & Partial<StyledTextProps>

export const Text = ({
  bold,
  capitalize = false,
  centered,
  children,
  color = 'text',
  inline,
  size = 'md',
  upperCase = false,
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      as={variant}
      bold={bold}
      capitalize={capitalize}
      centered={centered}
      color={color}
      inline={inline}
      size={size}
      upperCase={upperCase}
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
