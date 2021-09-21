import {animated} from '@react-spring/web'
import React, {useState} from 'react'
import styled from 'styled-components'
import {useSprings, config, interpolate} from 'react-spring'
import {useDrag} from 'react-use-gesture'

const Slider = styled(animated.div)`
  position: relative;
  & > div {
    position: absolute;
    padding: 2rem;
  }
`

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({x: 0, y: i, scale: 1})
const from = i => ({x: 0, rot: 0, scale: 1.5, y: -1000})

const SwipeSlider = ({children}) => {
  //   const [{x, scale}, api] = useSprings( children.length , index => ({ opacity }) )
  const [swipped] = useState(() => new Set())
  const [springs, api] = useSprings(children.length, i => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useDrag(
    ({
      args: [index],
      movement: [auxX],
      delta: [DeltX],
      swipe,
      direction: [xDir],
      velocity,
      down,
    }) => {
      const speedSwipe = velocity / 10 > 0.2
      console.log({velocity})
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
        console.log({DeltX, auxX})
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
