import { Icon } from '../Icon'

export type Props = {
  value: number
  stars?: number
  color?: string
}

export const Rating = ({ value, stars = 5, color = '#E8C11C' }: Props) => {
  const getStars = (v: number) => {
    if (v + 1 <= value) return 'fullStar'
    if (v + 0.5 <= value) return 'halfStar'
    return 'emptyStar'
  }

  return (
    <div>
      {Array.from({ length: stars }).map((_, e) => (
        <Icon name={getStars(e)} color={color} key={e} />
      ))}
    </div>
  )
}
