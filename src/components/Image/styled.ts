import styled from 'styled-components'

interface ImageProps {
  card: boolean
}

export const StyledImg = styled.img.attrs((props: ImageProps) => ({
  card: props.card
}))<ImageProps>`
  height: 100px;
  width: 100px;

  ${(props) =>
    props.card &&
    `position: absolute;
     top: calc(50% - 5%);
     left: 50%;
     width: 100%;
     height: 125%;
     transform: translate(-50%, -50%);
     object-fit: contain;`}
`

export default StyledImg
