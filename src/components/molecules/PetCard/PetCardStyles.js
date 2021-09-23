import {animated} from '@react-spring/web'
import styled from 'styled-components'

export const Card = styled(animated.div)`
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
  overflow: hidden;
  border-radius: 0.6rem;
  border: solid 0.2rem
    ${({$isLiked}) =>
      $isLiked ? '#1972D2' : $isLiked === false ? '#fd297B' : '#00000'};

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & svg {
    position: absolute;
    top: .5rem;
    right: .5rem;
  }

  & .name {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`
