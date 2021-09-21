import {animated} from '@react-spring/web'
import React, {useState} from 'react'
import styled from 'styled-components'
import {useSprings, config, interpolate} from 'react-spring'
import {useDrag} from 'react-use-gesture'

/* Style Slider */
const Slider = styled(animated.div)`
  position: relative;
  & > div {
    position: absolute;
    padding: 2rem;
  }
`

/** 
* SwipeSlider
* @summary Slider with animation Swiper LEFT and RIGHT
* @param {Element[]} children - Elements that show inside slider
* @param {function} callbackLeft - Callback execute when swipe left
* @param {function} callbackRight - Callback execute when swipe Right
*/
const SwipeSlider = ({children, callbackLeft, callbackRight}) => {
  const [swipped] = useState(() => new Set())
  const [springs, api] = useSprings(children.length, i => ({
    x: 0,
    y: i,
    scale: 1,
  }))

  const bind = useDrag(
    ({args: [index], movement: [auxX], direction: [xDir], velocity, down}) => {
      const speedSwipe = velocity > 0.2
      const direction = xDir < 0 ? -1 : 1
      if (!down && speedSwipe) swipped.add(index)

      api(i => {
        if (index !== i) return
        const isSwipped = swipped.has(index)
        const scale = down ? 1.1 : 1
        if (direction < 0 && isSwipped) {
          callbackLeft()
        } else if (direction > 0 && isSwipped) {
          callbackRight()
        }

        const x = isSwipped
          ? (200 + window.innerWidth) * direction
          : down
          ? auxX
          : 0
        return {scale, x, config: config.default}
      })
    },
  )

  return (
    <Slider>
      {springs.map(({x, scale}, index) => (
        <animated.div
          {...bind(index)}
          style={{
            transform: x.to(x => `translate3d(${x}px,0px,0)`),
          }}
        >
          {children[index]}
        </animated.div>
      ))}
    </Slider>
  )
}

export default SwipeSlider
