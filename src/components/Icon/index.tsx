import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMap } from './config'

export type IconName = keyof typeof iconMap

export type IconProps = {
  color: string
  name: IconName
  size?: SizeProp
}

export const Icon = ({ name, size, color }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={iconMap[name]}
      color={color}
      size={size}
      style={{ maxWidth: 'fit-content' }}
    />
  )
}
