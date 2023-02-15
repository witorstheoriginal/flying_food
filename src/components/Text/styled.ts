import styled from '@emotion/styled'
import { FontSize, ThemeColor } from '../../style/theme'

const UNIT = 'rem'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
export type StyledTextProps = {
  color: ThemeColor
  variant: TextVariant
  size: FontSize
  bold?: boolean
  upperCase: boolean
  capitalize: boolean
  centered?: boolean
  inline?: boolean
}

export const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  display: ${({ inline }) => inline && 'inline-block'};
  font-size: ${({ theme, size, variant }) => {
    if (size) return theme.fontSizes[size] + UNIT
    const variantFontSize = theme.textVariants[variant].fontSize

    if (variantFontSize === 'inherit') return

    const fontSize = size || variantFontSize || 'md'

    return theme.fontSizes[fontSize] + UNIT
  }};
  font-weight: ${({ bold }) => bold && 'bold'};
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight}px;
  text-align: ${({ centered }) => centered && 'center'};
  text-transform: ${({ capitalize }) => capitalize && 'capitalize'};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
`
