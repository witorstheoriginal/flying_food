import { Rating } from '../Rating'
import {
  CardButtonIcon,
  CardData,
  CardProductPrice,
  CardProductRating,
  CardProductStatus,
  CardTitle
} from './styled'

export type Props = {
  isAvailable: boolean
  price: number
  rating: number
  stars: number
  title: string
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
