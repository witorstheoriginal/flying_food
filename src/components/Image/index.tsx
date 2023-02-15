import { StyledImg } from './styled'

export type Props = {
  alt: string
  src: string
  card?: boolean
}

export const Image = ({ alt, src, card }: Props) => {
  return <StyledImg src={src} alt={alt} card={card} />
}
