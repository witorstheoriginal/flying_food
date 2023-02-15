import { ThemeColor } from '../../style/theme'
import { Icon, IconProps } from '../Icon'
import { MainButton } from '.'

export type Props = {
  backgroundColor: ThemeColor
  className?: string
} & IconProps

export const IconButton = ({ backgroundColor, name, size = '1x', color }: Props) => {
  return (
    <MainButton backgroundColor={backgroundColor}>
      <div
        style={{
          width: '15px',
          height: '15px'
        }}
      >
        <Icon name={name} color={color} size={size} />
      </div>
    </MainButton>
  )
}
