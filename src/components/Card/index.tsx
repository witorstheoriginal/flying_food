import { Image } from '../Image'
import { CardContent } from './CardContent'

import {
  CardContainer,
  CardTintedShadows,
  CardBackground,
  CardImageWrapper,
  CardImageBackground,
  CardImage,
  CardImageBadge,
  CardButton,
  CardButtonIcon
} from './styled'

export type Props = {
  title: string
  price: number
  rating: number
  stars: number
  isAvailable: boolean
  alt: string
  src: string
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
