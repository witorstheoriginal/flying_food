import { ThemeColor } from '../../style/theme'
import { Icon, IconProps } from '../Icon'
import { StyledIconButton } from './styled'

export type IconButtonProps = {
  backgroundColor?: ThemeColor
  className?: string
} & IconProps

export const IconButton = ({
  backgroundColor = 'textInverse',
  name,
  size = '1x',
  color,
  className
}: IconButtonProps) => {
  return (
    <StyledIconButton backgroundColor={backgroundColor} className={className}>
      <Icon name={name} color={color} size={size} />
    </StyledIconButton>
  )
}
