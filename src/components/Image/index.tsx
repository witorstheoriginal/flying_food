import React from 'react'
import { StyledImg } from './styled'

export type Props = {
  alt: string
  card?: boolean
  src: string
}

export const Image = ({ alt, src, card }: Props) => {
  return <StyledImg src={src} alt={alt} card={card} />
}
