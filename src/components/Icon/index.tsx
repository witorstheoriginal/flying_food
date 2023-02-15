import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMap } from './config'

export type IconName = keyof typeof iconMap

export type Props = {
  name: IconName
  size?: SizeProp
  color: string
}

export const Icon = ({ name, size, color }: Props) => {
  return (
    <FontAwesomeIcon
      icon={iconMap[name]}
      color={color}
      size={size}
      style={{ maxWidth: 'fit-content' }}
    />
  )
}
