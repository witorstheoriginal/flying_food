import { Image } from '../Image'
import { CardContent } from './CardContent'

import {
  CardBackground,
  CardButton,
  CardButtonIcon,
  CardContainer,
  CardImageBackground,
  CardImageBadge,
  CardImageWrapper,
  CardTintedShadows
} from './styled'

export type Props = {
  alt: string
  isAvailable: boolean
  price: number
  rating: number
  src: string
  stars: number
  title: string
}

export const Card = ({ title, price, rating, stars, isAvailable, alt, src }: Props) => {
  return (
    <CardContainer>
      <CardTintedShadows />
      <CardBackground />
      <CardImageWrapper>
        <CardImageBackground />
        <Image src={src} alt={alt} card />
        <CardImageBadge>new</CardImageBadge>
      </CardImageWrapper>
      <CardContent
        title={title}
        price={price}
        rating={rating}
        stars={stars}
        isAvailable={isAvailable}
      />
      <CardButton>
        <CardButtonIcon />
      </CardButton>
    </CardContainer>
  )
}
