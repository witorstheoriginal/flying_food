import { Rating } from '../Rating'
import {
  CardTitle,
  CardData,
  CardProductStatus,
  CardProductRating,
  CardProductPrice,
  CardButtonIcon
} from './styled'

export type Props = {
  title: string
  isAvailable: boolean
  rating: number
  price: number
  stars: number
}

export const CardContent = ({ title, isAvailable, rating, price }: Props) => {
  return (
    <CardData>
      <CardTitle>{title}</CardTitle>
      <CardProductStatus>{isAvailable ? 'Available' : 'Unavailable'}</CardProductStatus>
      <CardProductRating>
        <CardButtonIcon>
          <Rating value={rating} />
        </CardButtonIcon>
      </CardProductRating>
      <CardProductPrice>¤ {price}</CardProductPrice>
    </CardData>
  )
}
