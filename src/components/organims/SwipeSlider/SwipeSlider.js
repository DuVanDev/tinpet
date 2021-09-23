import React, {useState} from 'react'
import styled from 'styled-components'
import {useSprings, config, animated} from 'react-spring'
import {useDrag} from 'react-use-gesture'

/* Style Slider */
const Slider = styled(animated.div)`
  position: relative;
  height: 75%;
  margin: 2rem;
  & > div {
    position: absolute;
    height: 80vh;
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

        const x = isSwipped
          ? (200 + window.innerWidth) * direction
          : down
          ? auxX
          : 0
        return {
          scale,
          x,
          config: config.slow,
          onRest: () => {
            if (direction < 0 && isSwipped) {
              callbackLeft(i)
            } else if (direction > 0 && isSwipped) {
              callbackRight(index)
            }
          },
        }
      })
    },
  )

  return (
    <Slider>
      {springs.map(({x}, index) => (
        <animated.div
          key={index}
          {...bind(index)}
          style={{
            transform: x.to(x => `translate3d(${x}px,0px,0)`),
            width: '100%',
            zIndex: springs.length - index,
          }}
        >
          {children[index]}
        </animated.div>
      ))}
    </Slider>
  )
}

export default SwipeSlider
