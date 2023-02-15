import styled from 'styled-components'

export const CardContainer = styled.div`
  width: var(--card-width);
  height: var(--card-height);

  color: black;
  padding: 32px 22px;
  position: relative;
  z-index: 5;
`

export const CardTintedShadows = styled.span`
  background: linear-gradient(to bottom, #5d9bdf, #6089d8);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 0;
  width: 50%;
  height: 100%;
  transform: translateY(-50%) skew(calc(var(--skew-value) * -1));
  z-index: -2;
`

export const CardBackground = styled.span`
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) skew(var(--skew-value));
  z-index: -1;
  box-shadow: 5px 5px #00000026;
`

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`

export const CardImageBackground = styled.span`
  background-color: #e4e0df;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) skew(var(--skew-value));
  z-index: -1;
`

export const CardImage = styled.img`
  position: absolute;
  top: calc(50% - 5%);
  left: 50%;
  width: 100%;
  height: 125%;
  transform: translate(-50%, -50%);
  object-fit: contain;
`

export const CardImageBadge = styled.div`
  --card-badge-position-offset: 5px;

  position: absolute;
  top: calc(var(--card-badge-position-offset) * -1);
  left: calc(var(--card-badge-position-offset));
  color: white;
  background-color: #5d9bdf;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding: 2px 10px;
  border-radius: 999px;
  z-index: 1;
`

export const CardData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  position: absolute;
  left: 28%;
`

export const CardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`

export const CardProductStatus = styled.div`
  text-transform: uppercase;
  color: #a5a5a5;
  font-size: 12px;
  font-weight: bold;
`

export const CardProductRating = styled.div`
  margin-bottom: 5px;
`

export const CardProductPrice = styled.div`
  font-weight: bold;
`

export const CardButton = styled.div`
  --button-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(var(--button-size) / 2 * -1);
  left: calc(50% + 10px);
  transform: translateX(-50%);
  width: var(--button-size);
  height: var(--button-size);
  background: linear-gradient(#f9cf44, #eba636);
  border-radius: 50%;
`

export const CardButtonIcon = styled.div`
  color: #e8c11c;
`
