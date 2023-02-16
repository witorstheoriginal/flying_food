import { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledButton } from './styled'

export type Props = {
  backgroundColor: ThemeColor
  className?: string
  children: ReactNode
}

export const MainButton = ({ children, backgroundColor }: Props) => {
  return <StyledButton backgroundColor={backgroundColor}>{children}</StyledButton>
}
